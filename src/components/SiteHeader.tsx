import { APPLY_URL } from "../config";
import { MonadLogoFull } from "./MonadLogoFull";

const NAV = [
  { href: "#problem", label: "Problem" },
  { href: "#program", label: "Program" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.06] bg-surface-nav/95 pt-[env(safe-area-inset-top,0px)] shadow-nav backdrop-blur-[75px]">
      <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between gap-6 px-4 sm:gap-8 sm:px-8 md:px-10 lg:gap-12 lg:px-14 xl:px-16">
        <a href="#top" className="group flex min-w-0 max-w-[min(100%,48%)] shrink items-center gap-2.5 sm:max-w-none sm:gap-4">
          <MonadLogoFull
            variant="onDark"
            size="md"
            className="shrink-0 drop-shadow-[0_0_28px_rgba(110,84,255,0.4)]"
          />
          <span className="min-w-0 truncate border-l border-white/10 pl-2 font-display text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] text-zinc-400 sm:pl-2.5 sm:text-[0.7rem] sm:tracking-[0.16em] md:text-xs">
            Summer Founders Program
          </span>
        </a>

        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4 md:gap-5">
          <nav
            className="min-w-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Page"
          >
            <ul className="flex items-center justify-end gap-1 sm:gap-2 md:gap-3">
              {NAV.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    className="block rounded-xl px-2 py-2 font-sans text-xs font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white sm:px-3 sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={APPLY_URL}
            className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-monad-cta to-monad-cta px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-wide text-white shadow-cta-primary transition-[transform,box-shadow] hover:shadow-cta-primary-hover active:scale-[0.98] sm:px-5 sm:text-[13px]"
          >
            <span className="relative">Apply</span>
          </a>
        </div>
      </div>
    </header>
  );
}
