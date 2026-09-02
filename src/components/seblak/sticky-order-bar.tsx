import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { formatIDR } from "../../data/seblak";
import { track, useCart } from "../../lib/seblak-cart";

export function StickyOrderBar() {
  const { count, total } = useCart();
  if (count === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-3 lg:hidden">
      <Link
        to="/seblak/checkout"
        onClick={() => track("view_cart", { count })}
        className="flex w-full items-center justify-between gap-3 rounded-md bg-brand px-5 py-4 text-[16px] font-bold text-brand-foreground"
      >
        <span className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          {count} Item
        </span>
        <span>Lihat Keranjang · {formatIDR(total)}</span>
      </Link>
    </div>
  );
}
