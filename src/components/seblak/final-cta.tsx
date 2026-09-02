import { MessageCircle } from "lucide-react";
import { Container } from "./ui";
import { buildWhatsAppUrl, track, useCart } from "../../lib/seblak-cart";

export function FinalCTA() {
  const { items, total, discount } = useCart();

  return (
    <section className="bg-foreground py-16 text-background lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
              Sudah Tahu Mau Makan Apa?
            </h2>
            <p className="mt-4 max-w-xl text-[17px] opacity-80">
              Racik seblak favoritmu atau pilih ayam geprek andalan kami.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <a
              href="#racik"
              className="inline-flex items-center justify-center rounded-md bg-brand px-7 py-4 text-[17px] font-bold text-brand-foreground transition-colors hover:bg-[#ea6a0c]"
            >
              Pesan Sekarang →
            </a>
            <a
              href={buildWhatsAppUrl({ items, total, discount })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { from: "final_cta" })}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background px-7 py-4 text-[17px] font-bold text-background transition-colors hover:bg-background hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
