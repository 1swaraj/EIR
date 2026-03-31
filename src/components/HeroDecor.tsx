import { useId } from "react";

/** Purely decorative SVGs for hero - aria-hidden everywhere */
export function HeroRingAccent({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const g1 = `${uid}-hr1`;
  const g2 = `${uid}-hr2`;
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="200" cy="200" r="178" stroke={`url(#${g1})`} strokeWidth="1" opacity="0.45" />
      <circle cx="200" cy="200" r="142" stroke={`url(#${g2})`} strokeWidth="1" strokeDasharray="8 14" opacity="0.5" />
      <circle cx="200" cy="200" r="108" stroke="rgb(131 110 249 / 0.2)" strokeWidth="1" />
      <defs>
        <linearGradient id={g1} x1="40" y1="40" x2="360" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(131 110 249)" stopOpacity="0.45" />
          <stop offset="1" stopColor="rgb(110 84 255)" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={g2} x1="360" y1="80" x2="80" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(131 110 249)" stopOpacity="0.35" />
          <stop offset="1" stopColor="rgb(82 82 91)" stopOpacity="0.08" />
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
          className="text-monad/30"
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
  const uid = useId().replace(/:/g, "");
  const g1 = `${uid}-lb`;
  const g2 = `${uid}-lb2`;
  return (
    <svg className={className} viewBox="0 0 200 4" fill="none" aria-hidden>
      <path d="M0 2h72" stroke={`url(#${g1})`} strokeWidth="1" />
      <circle cx="100" cy="2" r="3" fill="rgb(131 110 249 / 0.45)" />
      <path d="M128 2h72" stroke={`url(#${g2})`} strokeWidth="1" />
      <defs>
        <linearGradient id={g1} x1="0" y1="2" x2="72" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="transparent" />
          <stop offset="1" stopColor="rgb(131 110 249 / 0.5)" />
        </linearGradient>
        <linearGradient id={g2} x1="128" y1="2" x2="200" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(131 110 249 / 0.5)" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
