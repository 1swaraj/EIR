import { Reveal } from "../components/Reveal";
import { HeroFractalSideDecor } from "../components/HeroFractalGrid";
import { APPLY_URL } from "../config";
import { IconArrowUpRight } from "../components/icons";

const SIGNAL_CHIPS = ["Rolling review", "Shipped work", "No résumés"] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden border-b border-zinc-200/80"
    >
      {/* Calm center field — side strips carry the phased square graphic */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/90 to-white"
        aria-hidden
      />

      {/* Phased squares on left/right only; [data-hero-cell] + data-hero-side for motion */}
      <HeroFractalSideDecor />

      {/* Soft brand orbs — tuned for side-only grid */}
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
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-16 pt-[calc(env(safe-area-inset-top)+5rem)] sm:px-6 md:px-10 md:pb-20 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
          {/* Readable slab — Figma is type-on-grid; light scrim helps long copy on busy tiles */}
          <Reveal delay={40}>
            <div
              className="relative mx-auto w-full max-w-[min(100%,670px)] rounded-2xl border border-white/50 bg-white/[0.42] px-6 py-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.15)] backdrop-blur-md sm:px-10 sm:py-10 md:rounded-3xl md:px-[42px] md:py-[42px]"
              data-hero-content
            >
              <div className="flex flex-col gap-4 text-center">
                <h1 className="font-display text-[clamp(2rem,calc(0.5rem+5vw),3.75rem)] font-medium leading-[1.06] tracking-[-0.035em] text-fg-primary">
                  <span className="block bg-gradient-to-br from-fg-primary via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
                    Build before the world
                  </span>
                  <span className="mt-2 block sm:mt-3">
                    <span className="text-fg-secondary">tells you to </span>
                    <span className="bg-gradient-to-r from-monad via-monad-deep to-monad bg-clip-text font-semibold text-transparent">
                      wait
                    </span>
                    <span className="text-fg-secondary">.</span>
                  </span>
                </h1>

                <p className="font-sans text-lg leading-[1.45] text-fg-secondary md:text-xl md:leading-[1.5]">
                  Prototype-first program for India&apos;s{" "}
                  <span className="font-semibold text-fg-primary">misfit student builders</span>. You&apos;re already building. Now get paid
                  to keep going. Weekly demos, serious standards—on Monad.
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  {SIGNAL_CHIPS.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-fg-muted shadow-sm backdrop-blur-sm sm:text-[11px]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mx-auto mt-8 flex w-full max-w-[min(100%,670px)] flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-6">
              <a
                href={APPLY_URL}
                className="group relative inline-flex w-fit items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-monad-cta via-monad to-monad-deep px-10 py-4 font-mono text-sm font-medium uppercase tracking-wide text-white shadow-cta-primary transition-[transform,box-shadow] hover:shadow-cta-primary-hover active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0"
              >
                <span
                  className="pointer-events-none absolute -left-1/4 top-0 h-full w-[160%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70 motion-safe:animate-hero-shimmer motion-reduce:hidden"
                  aria-hidden
                />
                <span className="relative">Apply now</span>
                <IconArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-8 py-2.5 font-sans text-sm font-medium text-fg-secondary shadow-soft backdrop-blur-sm transition-[border-color,color,transform,box-shadow] duration-300 hover:border-monad/35 hover:text-fg-primary hover:shadow-[0_12px_40px_-16px_rgba(131,110,249,0.18)] active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-monad to-monad-deep shadow-glow-sm" />
                How it works
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
