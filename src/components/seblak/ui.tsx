import type { ReactNode } from "react";
import { Star } from "lucide-react";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-[16px] font-semibold text-brand-foreground transition-colors hover:bg-[#ea6a0c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-md border border-foreground bg-transparent px-6 py-3.5 text-[16px] font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export const btnSmall =
  "inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-4 py-2.5 text-[15px] font-semibold text-brand-foreground transition-colors hover:bg-[#ea6a0c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ no, children }: { no: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
      <span className="text-brand">{no}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      aria-label={`Rating ${rating} dari 5`}
    >
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i < Math.round(rating) ? "fill-brand text-brand" : "text-border"}`}
          />
        ))}
      </span>
      <span className="text-[13px] font-medium text-muted-foreground">{rating.toFixed(1)}</span>
    </span>
  );
}

export function Badge({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "dark" | "muted";
}) {
  const tones = {
    brand: "bg-brand text-brand-foreground",
    dark: "bg-foreground text-background",
    muted: "bg-surface text-foreground",
  } as const;
  return (
    <span
      className={`inline-block px-2 py-1 text-[11px] font-bold tracking-[0.12em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
