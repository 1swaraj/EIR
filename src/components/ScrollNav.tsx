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
      className={`fixed inset-x-0 top-0 z-[100] pt-[env(safe-area-inset-top,0px)] transition-[colors,box-shadow,backdrop-filter,border-color] duration-500 ease-out ${
        visible
          ? "border-b border-ink-800/80 bg-ink-950/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Fixed row height — no py toggle — avoids layout jump / “broken” header */}
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 md:px-8">
        <a
          href="#"
          className={`min-w-0 shrink font-display text-sm font-bold tracking-tight text-ink-100 transition-opacity duration-300 sm:text-[0.9375rem] ${
            visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!visible}
          tabIndex={visible ? 0 : -1}
        >
          <span className="block truncate">
            <span className="sm:hidden">Monad · Founders</span>
            <span className="hidden sm:inline">Monad · Summer Founders</span>
          </span>
        </a>
        <a
          href={APPLY_URL}
          className={`shrink-0 whitespace-nowrap rounded-full bg-ink-100 px-4 py-2 font-sans text-xs font-semibold text-ink-950 shadow-sm transition-[opacity,transform,background-color,box-shadow] duration-300 hover:-translate-y-px hover:bg-white hover:shadow-md motion-reduce:hover:translate-y-0 sm:px-5 ${
            visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!visible}
          tabIndex={visible ? 0 : -1}
        >
          Apply
        </a>
      </div>
    </header>
  );
}
