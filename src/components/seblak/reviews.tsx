import { Container, SectionLabel, Stars } from "./ui";
import { reviews } from "../../data/seblak";

export function Reviews() {
  return (
    <section className="border-b border-border bg-surface py-16 lg:py-24">
      <Container>
        <SectionLabel no="07">Ulasan</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.875rem,5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
          Kata Mereka
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.name} className="flex h-full flex-col border-t-2 border-foreground pt-4">
              <Stars rating={r.rating} />
              <blockquote className="mt-3 text-[17px] leading-snug font-medium">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-3 text-[14px] text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-muted-foreground">
          Contoh ulasan — akan diganti dengan ulasan pelanggan asli.
        </p>
      </Container>
    </section>
  );
}
