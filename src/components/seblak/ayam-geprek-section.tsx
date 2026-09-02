import { Plus } from "lucide-react";
import { Container, SectionLabel, btnSmall } from "./ui";
import { formatIDR, images, products } from "../../data/seblak";
import { useCart } from "../../lib/seblak-cart";

export function AyamGeprekSection() {
  const { addItem } = useCart();
  const list = products.filter((p) => p.category === "ayam-geprek");

  return (
    <section id="ayam-geprek" className="border-b border-border bg-surface py-16 lg:py-24">
      <Container>
        <SectionLabel no="04">Ayam Geprek</SectionLabel>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={images.ayamGeprek}
              alt="Ayam geprek crispy dengan sambal rica-rica, nasi, timun, dan sereh"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(1.875rem,5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
              Ayam Geprek Penuh Rasa.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Ayam crispy dengan racikan bumbu sereh dan sambal rica-rica yang bikin makan jadi
              lebih nikmat.
            </p>
            <ul className="mt-8">
              {list.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-4 border-t border-border py-4 last:border-b"
                >
                  <div className="min-w-0">
                    <p className="text-[17px] font-bold">{p.name}</p>
                    <p className="truncate text-[14px] text-muted-foreground">{p.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-[17px] font-extrabold">{formatIDR(p.price)}</span>
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: p.id,
                          name: p.name,
                          toppings: [],
                          extras: [],
                          notes: "",
                          quantity: 1,
                          unitPrice: p.price,
                        })
                      }
                      className={btnSmall}
                      aria-label={`Tambah ${p.name}`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                      Tambah
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
