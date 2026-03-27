import { useEffect, useState } from "react";
import { APPLY_URL } from "../config";

const SHOW_AFTER = 120;

export function ScrollNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b border-transparent pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        visible ? "border-ink-800/80 bg-ink-950/85 py-3 backdrop-blur-md" : "pointer-events-none bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-8">
        <a
          href="#"
          className={`font-display text-sm font-bold tracking-tight text-ink-100 transition-opacity ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Monad · Summer Founders
        </a>
        <a
          href={APPLY_URL}
          className={`rounded-full bg-ink-100 px-5 py-2 font-sans text-xs font-semibold text-ink-950 transition hover:bg-white ${
            visible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          Apply
        </a>
      </div>
    </header>
  );
}
