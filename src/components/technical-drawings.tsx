type DrawingProps = { className?: string };

const stroke = "currentColor";

export function HeroDrawing({ className }: DrawingProps) {
  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
    >
      <g className="text-border" stroke="currentColor" strokeWidth="0.5">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="560" />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} />
        ))}
      </g>
      <g className="text-foreground">
        <rect x="80" y="120" width="280" height="200" />
        <path d="M80 120 L220 40 L360 120" />
        <line x1="220" y1="40" x2="220" y2="320" />
        <path d="M80 320 L220 220 L360 320" />
        <path d="M80 120 L360 320 M360 120 L80 320" strokeDasharray="4 6" />
        <circle cx="220" cy="220" r="6" />
      </g>
      <g className="text-accent">
        <path d="M40 400 H200 a24 24 0 0 1 24 24 V520" />
        <circle cx="40" cy="400" r="4" />
        <circle cx="224" cy="520" r="4" />
        <path d="M280 400 h160 M280 396 v8 M440 396 v8" />
      </g>
      <g className="text-muted-foreground" strokeWidth="0.75">
        <path d="M80 360 h280 M80 356 v8 M360 356 v8" />
        <path d="M400 120 v200 M396 120 h8 M396 320 h8" />
      </g>
      <g className="fill-muted-foreground stroke-none" fontSize="9" fontFamily="var(--font-mono)">
        <text x="88" y="352">
          SECTION A—A
        </text>
        <text x="408" y="224">
          ELEV.
        </text>
        <text x="288" y="392">
          SCALE 1:100
        </text>
        <text x="40" y="544">
          ISO / PIPING DETAIL
        </text>
      </g>
    </svg>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      aria-hidden="true"
    >
      <g className="text-border" strokeWidth="0.5">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="260" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
        ))}
      </g>
      {children}
    </svg>
  );
}

export function ProjectDrawing({ variant }: { variant: string }) {
  const shapes: Record<string, React.ReactNode> = {
    warehouse: (
      <g className="text-foreground">
        <path d="M40 200 V90 L200 30 L360 90 V200" />
        <line x1="40" y1="200" x2="360" y2="200" />
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1={80 + i * 60} y1="200" x2={80 + i * 60} y2={i === 2 ? 55 : 78} />
        ))}
        <path d="M40 90 L360 90" strokeDasharray="4 6" />
        <path className="text-accent" d="M40 224 h320 M40 220 v8 M360 220 v8" />
      </g>
    ),
    crane: (
      <g className="text-foreground">
        <line x1="40" y1="60" x2="360" y2="60" />
        <line x1="40" y1="60" x2="40" y2="220" />
        <line x1="360" y1="60" x2="360" y2="220" />
        <path d="M40 60 L120 140 L200 60 L280 140 L360 60" />
        <rect className="text-accent" x="170" y="60" width="60" height="30" />
        <line className="text-accent" x1="200" y1="90" x2="200" y2="150" />
        <circle className="text-accent" cx="200" cy="160" r="10" />
      </g>
    ),
    channel: (
      <g className="text-foreground">
        <path d="M20 80 L140 80 L180 180 L300 180 L340 80 L380 80" />
        <path d="M20 120 L160 120 L200 200 L280 200 L320 120 L380 120" strokeDasharray="5 5" />
        <path className="text-accent" d="M60 150 h60 M120 150 l-8 -5 M120 150 l-8 5" />
        <line x1="20" y1="230" x2="380" y2="230" />
      </g>
    ),
    earthwork: (
      <g className="text-foreground">
        <path d="M20 180 L100 120 L180 150 L260 90 L380 130" />
        <line x1="20" y1="160" x2="380" y2="160" strokeDasharray="6 4" />
        <path className="text-accent" d="M100 120 V160 M260 90 V160" />
        <path d="M20 220 h360" />
      </g>
    ),
    piping: (
      <g className="text-foreground">
        <path d="M40 200 H140 a20 20 0 0 0 20-20 V90 a20 20 0 0 1 20-20 H320" />
        <circle cx="160" cy="130" r="8" />
        <rect className="text-accent" x="250" y="58" width="24" height="24" />
        <path className="text-accent" d="M320 70 l20 -20" />
        <path d="M40 230 h280" strokeDasharray="4 6" />
      </g>
    ),
    road: (
      <g className="text-foreground">
        <path d="M20 220 L160 40 M120 220 L260 40" />
        <path className="text-accent" d="M70 220 L210 40" strokeDasharray="14 12" />
        <path d="M280 60 h100 M280 100 h100 M280 140 h100" />
        <rect x="280" y="180" width="100" height="40" />
      </g>
    ),
  };

  return <Frame>{shapes[variant]}</Frame>;
}
