import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Container, SectionLabel, btnPrimary } from "./ui";
import { SpicyLevelSelector } from "./spicy-level-selector";
import { ToppingSelector } from "./topping-selector";
import { bases, extras, formatIDR, spicyLevels, toppings } from "../../data/seblak";
import { track, useCart } from "../../lib/seblak-cart";

function Step({ no, title, children }: { no: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="flex items-baseline gap-3 text-[13px] font-bold tracking-[0.16em] uppercase">
        <span className="text-brand">{no}</span>
        <span>{title}</span>
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function SeblakCustomizer() {
  const { addItem } = useCart();
  const [baseId, setBaseId] = useState(bases[0]!.id);
  const [level, setLevel] = useState(2);
  const [picked, setPicked] = useState<string[]>(["bakso"]);
  const [pickedExtras, setPickedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const base = bases.find((b) => b.id === baseId)!;

  const unitPrice = useMemo(() => {
    const t = toppings.filter((x) => picked.includes(x.id)).reduce((s, x) => s + x.price, 0);
    const e = extras.filter((x) => pickedExtras.includes(x.id)).reduce((s, x) => s + x.price, 0);
    return base.price + t + e;
  }, [base, picked, pickedExtras]);

  function toggle(list: string[], set: (v: string[]) => void, id: string) {
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
    track("topping_selected", { id });
  }

  return (
    <section id="racik" className="border-b border-border py-16 lg:py-24">
      <Container>
        <SectionLabel no="03">Racik</SectionLabel>
        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] lg:col-span-7">
            Racik Seblakmu Sendiri.
          </h2>
          <p className="text-[17px] leading-relaxed text-muted-foreground lg:col-span-5">
            Pilih base, tentukan level pedas, tambahkan topping favoritmu, lalu nikmati seblak
            sesuai selera.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Step no="01" title="Pilih Base">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {bases.map((b) => {
                  const active = b.id === baseId;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setBaseId(b.id);
                        track("customizer_start", { base: b.id });
                      }}
                      className={`rounded-md border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                        active
                          ? "border-brand bg-brand text-brand-foreground"
                          : "border-border bg-background hover:border-foreground"
                      }`}
                    >
                      <span className="block text-[15px] font-semibold">{b.name}</span>
                      <span className="block text-[13px] opacity-80">{formatIDR(b.price)}</span>
                    </button>
                  );
                })}
              </div>
            </Step>

            <Step no="02" title="Pilih Level Pedas">
              <SpicyLevelSelector value={level} onChange={setLevel} />
            </Step>

            <Step no="03" title="Pilih Topping">
              <ToppingSelector
                label="Topping"
                options={toppings}
                selected={picked}
                onToggle={(id) => toggle(picked, setPicked, id)}
              />
            </Step>

            <Step no="04" title="Extra">
              <ToppingSelector
                label="Extra"
                options={extras}
                selected={pickedExtras}
                onToggle={(id) => toggle(pickedExtras, setPickedExtras, id)}
              />
            </Step>

            <Step no="05" title="Catatan">
              <label htmlFor="racik-notes" className="sr-only">
                Catatan untuk dapur
              </label>
              <textarea
                id="racik-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Contoh: jangan terlalu banyak kuah."
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-[16px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              />
            </Step>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 border border-foreground bg-surface p-5">
              <p className="text-[12px] font-bold tracking-[0.16em] uppercase">Ringkasan Racikan</p>
              <dl className="mt-4 space-y-2 text-[15px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Base</dt>
                  <dd className="font-semibold">{base.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Level pedas</dt>
                  <dd className="font-semibold">
                    {level} · {spicyLevels[level]?.label}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Topping</dt>
                  <dd className="text-right font-semibold">
                    {picked.length
                      ? toppings
                          .filter((t) => picked.includes(t.id))
                          .map((t) => t.name)
                          .join(", ")
                      : "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Extra</dt>
                  <dd className="text-right font-semibold">
                    {pickedExtras.length
                      ? extras
                          .filter((t) => pickedExtras.includes(t.id))
                          .map((t) => t.name)
                          .join(", ")
                      : "—"}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                <span className="text-[13px] font-semibold tracking-[0.14em] uppercase">
                  Jumlah
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Kurangi jumlah"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-foreground"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-[17px] font-bold">{qty}</span>
                  <button
                    type="button"
                    aria-label="Tambah jumlah"
                    onClick={() => setQty((q) => q + 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-5 flex items-baseline justify-between border-t border-border pt-5">
                <span className="text-[13px] font-semibold tracking-[0.14em] uppercase">Total</span>
                <span className="text-[28px] font-extrabold">{formatIDR(unitPrice * qty)}</span>
              </p>

              <button
                type="button"
                onClick={() => {
                  addItem({
                    id: "seblak-racik",
                    name: `Seblak Racikan (${base.name})`,
                    base: base.name,
                    spicyLevel: level,
                    toppings: toppings.filter((t) => picked.includes(t.id)).map((t) => t.name),
                    extras: extras.filter((t) => pickedExtras.includes(t.id)).map((t) => t.name),
                    notes,
                    quantity: qty,
                    unitPrice,
                  });
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 2500);
                }}
                className={`${btnPrimary} mt-5 w-full`}
              >
                Tambah ke Keranjang
              </button>
              <p aria-live="polite" className="mt-2 min-h-5 text-[14px] font-medium text-success">
                {added ? "Racikan masuk keranjang." : ""}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
