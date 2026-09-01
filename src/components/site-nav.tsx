import { useEffect, useState } from "react";
import { navItems } from "../data/portfolio";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="text-lg font-bold tracking-[0.22em] uppercase">
          Yonsi
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`label transition-colors hover:text-accent ${
                active === item.id ? "text-accent" : "text-foreground"
              }`}
            >
              <span className="text-muted-foreground">{item.no}</span>{" "}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="block h-2 w-2 bg-accent" aria-hidden="true" />
          <span className="label text-muted-foreground">Available for projects</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="label border border-foreground px-3 py-2 lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-foreground lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-border px-5 py-4 text-xl font-medium uppercase tracking-tight"
              >
                <span className="label text-accent">{item.no}</span>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-5 py-4">
              <span className="block h-2 w-2 bg-accent" aria-hidden="true" />
              <span className="label text-muted-foreground">Available for projects</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
