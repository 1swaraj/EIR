/** Purely decorative SVGs for hero — aria-hidden everywhere */
export function HeroRingAccent({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="200" cy="200" r="178" stroke="url(#hr1)" strokeWidth="1" opacity="0.35" />
      <circle cx="200" cy="200" r="142" stroke="url(#hr2)" strokeWidth="1" strokeDasharray="8 14" opacity="0.45" />
      <circle cx="200" cy="200" r="108" stroke="rgb(232 220 200 / 0.12)" strokeWidth="1" />
      <defs>
        <linearGradient id="hr1" x1="40" y1="40" x2="360" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(232 220 200)" stopOpacity="0.5" />
          <stop offset="1" stopColor="rgb(68 64 60)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="hr2" x1="360" y1="80" x2="80" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(232 220 200)" stopOpacity="0.35" />
          <stop offset="1" stopColor="rgb(41 37 36)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroDots({ className = "" }: { className?: string }) {
  const circles = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={14 + col * 23}
          cy={14 + row * 23}
          r="1.5"
          fill="currentColor"
          className="text-ink-600/50"
        />
      );
    }
  }
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden>
      {circles}
    </svg>
  );
}

export function HeroLineBurst({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 4" fill="none" aria-hidden>
      <path d="M0 2h72" stroke="url(#lb)" strokeWidth="1" />
      <circle cx="100" cy="2" r="3" fill="rgb(232 220 200 / 0.35)" />
      <path d="M128 2h72" stroke="url(#lb2)" strokeWidth="1" />
      <defs>
        <linearGradient id="lb" x1="0" y1="2" x2="72" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="1" stopColor="rgb(232 220 200 / 0.4)" />
        </linearGradient>
        <linearGradient id="lb2" x1="128" y1="2" x2="200" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(232 220 200 / 0.4)" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
