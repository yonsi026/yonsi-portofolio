import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { business, formatIDR, promo } from "../data/seblak";

export type CartItem = {
  id: string;
  name: string;
  base?: string;
  spicyLevel?: number;
  toppings: string[];
  extras: string[];
  notes: string;
  quantity: number;
  unitPrice: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id"> & { id?: string }) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  discount: number;
  total: number;
  promoApplied: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "seblak-cart-v1";

export type AnalyticsEvent =
  | "page_view"
  | "menu_view"
  | "product_view"
  | "customizer_start"
  | "topping_selected"
  | "add_to_cart"
  | "view_cart"
  | "checkout_start"
  | "payment_selected"
  | "order_completed"
  | "whatsapp_click"
  | "promo_clicked";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "id"> & { id?: string }) => {
    setItems((prev) => [
      ...prev,
      { ...item, id: item.id ? `${item.id}-${Date.now()}` : `item-${Date.now()}` },
    ]);
    track("add_to_cart", { name: item.name, price: item.unitPrice, qty: item.quantity });
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [],
  );

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    const promoApplied = subtotal >= promo.minSpend;
    const discount = promoApplied ? promo.discount : 0;
    return {
      items,
      addItem,
      setQuantity,
      removeItem,
      clear,
      count,
      subtotal,
      discount,
      total: Math.max(subtotal - discount, 0),
      promoApplied,
    };
  }, [items, addItem, setQuantity, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function describeItem(item: CartItem) {
  const parts: string[] = [];
  if (item.base) parts.push(`Base: ${item.base}`);
  if (typeof item.spicyLevel === "number") parts.push(`Level ${item.spicyLevel}`);
  if (item.toppings.length) parts.push(`Topping: ${item.toppings.join(", ")}`);
  if (item.extras.length) parts.push(`Extra: ${item.extras.join(", ")}`);
  if (item.notes) parts.push(`Catatan: ${item.notes}`);
  return parts;
}

export function buildWhatsAppUrl({
  items,
  total,
  discount,
  customer,
}: {
  items: CartItem[];
  total: number;
  discount: number;
  customer?: {
    name: string;
    phone: string;
    method: string;
    address: string;
    payment: string;
    notes: string;
  };
}) {
  const lines: string[] = ["Hallo, saya mau pesan:", ""];
  for (const item of items) {
    lines.push(`• ${item.name} x${item.quantity} — ${formatIDR(item.unitPrice * item.quantity)}`);
    for (const p of describeItem(item)) lines.push(`  ${p}`);
  }
  if (!items.length) lines.push("• (belum memilih menu)");
  lines.push("");
  if (discount > 0) lines.push(`Promo ${promo.code}: -${formatIDR(discount)}`);
  lines.push(`Total: ${formatIDR(total)}`);
  if (customer) {
    lines.push("");
    lines.push(`Nama: ${customer.name}`);
    lines.push(`No. WhatsApp: ${customer.phone}`);
    lines.push(`Metode: ${customer.method}`);
    if (customer.address) lines.push(`Alamat: ${customer.address}`);
    lines.push(`Pembayaran: ${customer.payment}`);
    if (customer.notes) lines.push(`Catatan: ${customer.notes}`);
  }
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
