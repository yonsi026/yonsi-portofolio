import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { Container, btnPrimary } from "../components/seblak/ui";
import { SeblakFooter } from "../components/seblak/footer";
import { business, formatIDR, promo } from "../data/seblak";
import { buildWhatsAppUrl, describeItem, track, useCart } from "../lib/seblak-cart";

const title = "Checkout — Seblak Prasmanan & Ayam Geprek Sereh";
const description =
  "Periksa pesanan seblak dan ayam geprek kamu, lengkapi data, lalu kirim pesanan lewat WhatsApp.";
const url = "https://yonsi-portofolio.lovable.app/seblak/checkout";

export const Route = createFileRoute("/seblak/checkout")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: CheckoutPage,
});

const inputClass =
  "mt-1.5 w-full rounded-md border border-border bg-background px-4 py-3 text-[16px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function CheckoutPage() {
  const { items, setQuantity, removeItem, subtotal, discount, total, promoApplied } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("Delivery");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Tunai (COD)");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    track("checkout_start", { items: items.length });
  }, [items.length]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!items.length) return setError("Keranjang masih kosong.");
    if (!name.trim() || !phone.trim()) return setError("Nama dan nomor WhatsApp wajib diisi.");
    if (method === "Delivery" && !address.trim())
      return setError("Alamat wajib diisi untuk delivery.");
    setError("");
    track("order_completed", { total, method, payment });
    window.open(
      buildWhatsAppUrl({
        items,
        total,
        discount,
        customer: { name, phone, method, address, payment, notes },
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <Container className="flex items-center justify-between py-4">
          <Link to="/seblak" className="inline-flex items-center gap-2 text-[15px] font-semibold">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali
          </Link>
          <span className="text-[13px] font-bold tracking-[0.16em] uppercase">Checkout</span>
        </Container>
      </header>

      <main className="py-10 lg:py-16">
        <Container>
          <h1 className="text-[clamp(2rem,6vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
            Keranjang &amp; Data Pesanan
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="text-[13px] font-bold tracking-[0.16em] uppercase">
                Pesanan Kamu
              </h2>
              {items.length === 0 ? (
                <p className="mt-4 border border-border p-6 text-[16px] text-muted-foreground">
                  Keranjang masih kosong.{" "}
                  <Link to="/seblak" className="font-semibold text-brand underline">
                    Pilih menu dulu
                  </Link>
                  .
                </p>
              ) : (
                <ul className="mt-4">
                  {items.map((item) => (
                    <li key={item.id} className="border-t border-border py-5 last:border-b">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[17px] font-bold">{item.name}</p>
                          {describeItem(item).map((line) => (
                            <p key={line} className="text-[14px] text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                        <p className="shrink-0 text-[17px] font-extrabold">
                          {formatIDR(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Kurangi ${item.name}`}
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-foreground"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-[16px] font-bold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Tambah ${item.name}`}
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-foreground"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-error"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                          Hapus
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <dl className="mt-6 space-y-2 text-[16px]">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-semibold">{formatIDR(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">
                    Promo {promo.code}
                    {!promoApplied && ` (min. ${formatIDR(promo.minSpend)})`}
                  </dt>
                  <dd
                    className={
                      promoApplied ? "font-semibold text-success" : "text-muted-foreground"
                    }
                  >
                    {promoApplied ? `−${formatIDR(discount)}` : "—"}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-[20px]">
                  <dt className="font-bold">Total</dt>
                  <dd className="font-extrabold">{formatIDR(total)}</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="data-heading" className="lg:col-span-5">
              <h2 id="data-heading" className="text-[13px] font-bold tracking-[0.16em] uppercase">
                Data Pemesan
              </h2>
              <form onSubmit={onSubmit} className="mt-4 border border-foreground p-5">
                <label className="block text-[14px] font-semibold">
                  Nama
                  <input
                    className={inputClass}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="mt-4 block text-[14px] font-semibold">
                  Nomor WhatsApp
                  <input
                    className={inputClass}
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>

                <fieldset className="mt-4">
                  <legend className="text-[14px] font-semibold">Metode</legend>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {["Delivery", "Pickup"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={method === m}
                        onClick={() => setMethod(m)}
                        className={`rounded-md border px-3 py-3 text-[15px] font-semibold transition-colors ${
                          method === m
                            ? "border-brand bg-brand text-brand-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {method === "Delivery" && (
                  <label className="mt-4 block text-[14px] font-semibold">
                    Alamat
                    <textarea
                      className={inputClass}
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </label>
                )}

                <fieldset className="mt-4">
                  <legend className="text-[14px] font-semibold">Pembayaran</legend>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {["Tunai (COD)", "Transfer / QRIS"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        aria-pressed={payment === p}
                        onClick={() => {
                          setPayment(p);
                          track("payment_selected", { payment: p });
                        }}
                        className={`rounded-md border px-3 py-3 text-[15px] font-semibold transition-colors ${
                          payment === p
                            ? "border-brand bg-brand text-brand-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="mt-4 block text-[14px] font-semibold">
                  Catatan
                  <textarea
                    className={inputClass}
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: titip di pos satpam."
                  />
                </label>

                <p aria-live="polite" className="mt-3 min-h-5 text-[14px] font-medium text-error">
                  {error}
                </p>

                <button type="submit" className={`${btnPrimary} w-full`}>
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Buat Pesanan
                </button>
                <p className="mt-3 text-[13px] text-muted-foreground">
                  Pesanan dikirim ke WhatsApp {business.whatsappLabel} untuk dikonfirmasi.
                </p>
              </form>
            </section>
          </div>
        </Container>
      </main>
      <SeblakFooter />
    </>
  );
}
