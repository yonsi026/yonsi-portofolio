import { Container, SectionLabel } from "./ui";
import { ProductCard } from "./product-card";
import { products } from "../../data/seblak";

export function BestSeller() {
  const list = products.filter((p) => p.isBestSeller || p.isPromotion).slice(0, 6);
  return (
    <section className="border-b border-border bg-surface py-16 lg:py-24">
      <Container>
        <SectionLabel no="02">Favorit</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.875rem,5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
          Favorit Pelanggan
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
