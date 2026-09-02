import { spicyLevels } from "../../data/seblak";

export function SpicyLevelSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (level: number) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Level pedas"
      className="grid grid-cols-2 gap-2 sm:grid-cols-3"
    >
      {spicyLevels.map((l) => {
        const active = value === l.level;
        return (
          <button
            key={l.level}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(l.level)}
            className={`rounded-md border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
              active
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-background hover:border-foreground"
            }`}
          >
            <span className="block text-[20px] leading-none font-extrabold">{l.level}</span>
            <span className="mt-1 block text-[13px] font-medium">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
