import { Container } from "./ui";
import { business } from "../../data/seblak";

const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Seblak", href: "#racik" },
  { label: "Ayam Geprek", href: "#ayam-geprek" },
  { label: "Promo", href: "#promo" },
  { label: "Kontak", href: "#kontak" },
];

export function SeblakFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[17px] font-extrabold tracking-tight uppercase">{business.name}</p>
          <p className="mt-2 text-[15px] text-muted-foreground">{business.city}, Indonesia</p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3">
          <ul className="space-y-1.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[15px] hover:text-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-4">
          <p className="text-[15px] text-muted-foreground">WhatsApp {business.whatsappLabel}</p>
          <p className="text-[15px] text-muted-foreground">{business.address}</p>
          <p className="text-[15px] text-muted-foreground">{business.hours}</p>
        </div>
        <p className="border-t border-border pt-6 text-[13px] text-muted-foreground sm:col-span-2 lg:col-span-12">
          © 2026 Seblak Prasmanan dan Ayam Geprek Sereh
        </p>
      </Container>
    </footer>
  );
}
