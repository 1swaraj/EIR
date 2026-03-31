import { HeroFractalSideDecor } from "../components/HeroFractalGrid";
import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";
import { IconArrowUpRight } from "../components/icons";

const SIGNAL_CHIPS = ["Rolling review", "Shipped work", "No résumés"] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="hero-sync-cell relative scroll-mt-28 overflow-hidden border-b border-zinc-200/80 bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Figma: calm center field, phased squares on edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/90 to-white" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-hero-sync opacity-[0.28]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(254,243,199,0.22),transparent_50%)] mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_12%,rgba(131,110,249,0.1),transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_95%,rgba(165,180,252,0.12),transparent_52%)]"
        aria-hidden
      />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" aria-hidden />

      <HeroFractalSideDecor />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-[calc(env(safe-area-inset-top)+5rem)] sm:px-6 md:px-10 md:pb-28 lg:px-12">
        <div className="mx-auto w-full max-w-[36rem] text-center">
          <Reveal>
            <h1
              id="hero-heading"
              className="font-display text-[clamp(1.35rem,calc(0.5rem+3.8vw),3.15rem)] font-bold leading-[1.08] tracking-tight text-fg-primary sm:leading-[1.06]"
            >
              <span className="block whitespace-nowrap">Build before the world</span>
              <span className="mt-2 block whitespace-nowrap sm:mt-2.5">
                <span className="text-fg-secondary">tells you to </span>
                <span className="text-gradient-warm">wait</span>
                <span className="text-fg-secondary">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={70}>
            <p className="mx-auto mt-8 max-w-xl text-pretty font-sans text-lg leading-relaxed text-fg-secondary md:text-xl">
              Prototype-first program for India&apos;s{" "}
              <span className="font-semibold text-fg-primary">misfit student builders</span>. You&apos;re already building. Now get paid to keep
              going. Weekly demos, serious standards—on Monad.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {SIGNAL_CHIPS.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-fg-muted shadow-sm backdrop-blur-sm sm:text-[11px]"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-10 flex justify-center">
              <a
                href={APPLY_URL}
                className="group relative inline-flex min-h-[3rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-monad-cta via-monad to-monad-deep px-9 font-mono text-sm font-medium uppercase tracking-wide text-white shadow-cta-primary transition-[transform,box-shadow] hover:shadow-cta-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-monad/50 active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0 sm:min-h-0 sm:px-10 sm:py-4"
              >
                <span
                  className="pointer-events-none absolute -left-1/4 top-0 h-full w-[160%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 motion-safe:animate-hero-shimmer motion-reduce:hidden"
                  aria-hidden
                />
                <span className="relative">Apply now</span>
                <IconArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
