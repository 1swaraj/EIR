import { useEffect, useState } from "react";
import { APPLY_URL } from "../config";

const HERO_BOTTOM = 520;

export function StickyCTA() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > HERO_BOTTOM);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200/90 bg-white/95 shadow-[0_-8px_32px_rgba(15,23,42,0.08)] backdrop-blur-md transition-[transform,box-shadow] duration-300 ease-out md:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <p className="min-w-0 truncate font-display text-sm font-semibold tracking-tight text-fg-primary">
          Monad Summer Founders Program
        </p>
        <a
          href={APPLY_URL}
          className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-monad-cta to-monad-cta px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wide text-white shadow-cta-primary transition-[transform,box-shadow] active:scale-[0.98] hover:shadow-cta-primary-hover"
        >
          <span
            className="pointer-events-none absolute -left-1/4 top-0 h-full w-[150%] skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-50 motion-safe:animate-hero-shimmer motion-reduce:hidden"
            aria-hidden
          />
          <span className="relative">Apply</span>
        </a>
      </div>
    </div>
  );
}
