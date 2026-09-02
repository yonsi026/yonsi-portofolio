import { Container, SectionLabel } from "./ui";
import { benefits } from "../../data/seblak";

export function WhyChooseUs() {
  return (
    <section className="border-b border-border py-16 lg:py-24">
      <Container>
        <SectionLabel no="06">Alasan</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.875rem,5vw,3.5rem)] leading-[1] font-extrabold tracking-[-0.03em]">
          Kenapa Pilih Kami?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.no} className="border-t-2 border-foreground pt-4">
              <p className="text-[13px] font-bold tracking-[0.16em] text-brand">{b.no}</p>
              <h3 className="mt-2 text-[19px] font-bold tracking-tight">{b.title}</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
