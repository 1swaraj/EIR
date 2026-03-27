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
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-ink-800/80 bg-ink-950/90 shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.55)] backdrop-blur-md transition-[transform,box-shadow] duration-300 ease-out md:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <p className="font-display text-sm font-semibold tracking-tight text-ink-100">
          Monad Summer Founders
        </p>
        <a
          href={APPLY_URL}
          className="shrink-0 rounded-full bg-ink-100 px-5 py-2.5 font-sans text-sm font-semibold text-ink-950 transition-[background-color,transform,box-shadow] duration-200 hover:bg-white active:scale-[0.98] motion-safe:hover:-translate-y-px"
        >
          Apply
        </a>
      </div>
    </div>
  );
}
