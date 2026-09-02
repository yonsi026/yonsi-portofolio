import { Check } from "lucide-react";
import { formatIDR, type Topping } from "../../data/seblak";

export function ToppingSelector({
  options,
  selected,
  onToggle,
  label,
}: {
  options: Topping[];
  selected: string[];
  onToggle: (id: string) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((t) => {
        const active = selected.includes(t.id);
        return (
          <button
            key={t.id}
            type="button"
            aria-pressed={active}
            disabled={!t.isAvailable}
            onClick={() => onToggle(t.id)}
            className={`flex items-center justify-between gap-2 rounded-md border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:border-border disabled:bg-surface disabled:text-muted-foreground ${
              active
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-background hover:border-foreground"
            }`}
          >
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-semibold">{t.name}</span>
              <span className="block text-[13px] opacity-80">
                {t.isAvailable ? `+${formatIDR(t.price)}` : "Habis"}
              </span>
            </span>
            {active && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
          </button>
        );
      })}
    </div>
  );
}
