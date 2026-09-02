import { Bike, Flame, MessageCircle, ShoppingBag, Utensils } from "lucide-react";
import { Container, btnPrimary, btnSecondary } from "./ui";
import { images } from "../../data/seblak";
import { track } from "../../lib/seblak-cart";

const micro = [
  { icon: Utensils, text: "Racik sendiri" },
  { icon: ShoppingBag, text: "Topping pilihan" },
  { icon: Flame, text: "Level pedas 0–5" },
  { icon: Bike, text: "Delivery / Pickup" },
  { icon: MessageCircle, text: "Pesan via WhatsApp" },
];

export function SeblakHero() {
  return (
    <section id="top" className="border-b border-border">
      <Container className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-brand uppercase">
            Seblak Prasmanan · {new Date().getFullYear()}
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
            Seblak Sesuai Selera, Ayam Geprek Penuh Rasa.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Racik sendiri seblak favoritmu atau nikmati ayam geprek dengan bumbu sereh dan sambal
            rica-rica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#racik" className={btnPrimary} onClick={() => track("customizer_start")}>
              Pesan Sekarang →
            </a>
            <a href="#menu" className={btnSecondary} onClick={() => track("menu_view")}>
              Lihat Menu
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
            {micro.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-[14px] font-medium">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="relative">
            <img
              src={images.seblakHero}
              alt="Semangkuk seblak prasmanan dengan kuah pedas, ceker, bakso, sosis, dan telur"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              <span>Level Pedas 0—5</span>
              <span>Topping Sesuai Selera</span>
              <span className="text-brand">Order Online</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
