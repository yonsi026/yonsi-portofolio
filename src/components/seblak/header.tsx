import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Container, btnSmall } from "./ui";
import { useCart, track } from "../../lib/seblak-cart";

const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Seblak", href: "#racik" },
  { label: "Ayam Geprek", href: "#ayam-geprek" },
  { label: "Promo", href: "#promo" },
  { label: "Tentang Kami", href: "#kontak" },
];

export function SeblakHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex items-center justify-between gap-4 py-3.5">
        <a href="#top" className="min-w-0 leading-[1.05]">
          <span className="block text-[15px] font-extrabold tracking-tight uppercase sm:text-[17px]">
            Seblak Prasmanan
          </span>
          <span className="block text-[11px] font-semibold tracking-[0.18em] text-brand uppercase">
            &amp; Ayam Geprek Sereh
          </span>
        </a>

        <nav aria-label="Utama" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => track("menu_view", { section: n.label })}
              className="text-[15px] font-medium text-foreground transition-colors hover:text-brand"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/seblak/checkout"
            onClick={() => track("view_cart", { count })}
            aria-label={`Keranjang, ${count} item`}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-border transition-colors hover:border-foreground"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-5 rounded-full bg-brand px-1 text-center text-[11px] leading-5 font-bold text-brand-foreground">
                {count}
              </span>
            )}
          </Link>
          <a href="#racik" className={`${btnSmall} hidden sm:inline-flex`}>
            Pesan Sekarang
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="seblak-mobile-nav"
            aria-label="Buka menu navigasi"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="seblak-mobile-nav"
          aria-label="Navigasi mobile"
          className="border-t border-border lg:hidden"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-5 py-4 text-[17px] font-semibold"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
