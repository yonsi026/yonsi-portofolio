import { ArrowRight } from "lucide-react";
import { Container, SectionLabel } from "./ui";
import { categories } from "../../data/seblak";
import { track } from "../../lib/seblak-cart";

export function CategoryGrid() {
  return (
    <section id="menu" className="border-b border-border py-16 lg:py-24">
      <Container>
        <SectionLabel no="01">Menu</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[clamp(1.875rem,5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
          Mau Makan Apa Hari Ini?
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((c, i) => (
            <a
              key={c.id}
              href={c.href}
              onClick={() => track("product_view", { category: c.id })}
              className="group block lg:col-span-6 xl:col-span-3"
            >
              <img
                src={c.image}
                alt={`Foto ${c.name}`}
                loading="lazy"
                width={1200}
                height={900}
                className={`w-full object-cover ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
              />
              <h3 className="mt-4 text-[22px] font-extrabold tracking-tight uppercase">{c.name}</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">{c.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand">
                {c.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
