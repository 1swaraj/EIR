import { MonadShape } from "../components/MonadShape";
import { Reveal } from "../components/Reveal";
import { HeroLineBurst, HeroRingAccent } from "../components/HeroDecor";
import { APPLY_URL } from "../config";
import { IconArrowUpRight, IconCorner } from "../components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-ink-800/80">
      {/* -- Atmospheric stack -- */}
      <div className="pointer-events-none absolute inset-0 bg-ink-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_10%_-15%,rgba(232,220,200,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_20%,rgba(87,83,78,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/30 to-ink-950" />
      <div
        className="pointer-events-none absolute -left-[25%] bottom-[8%] h-[min(100vw,600px)] w-[min(100vw,600px)] animate-hero-breathe motion-reduce:animate-none [animation-delay:-2.5s]"
        aria-hidden
      >
        <HeroRingAccent className="h-full w-full opacity-90" />
      </div>
      <div
        className="pointer-events-none absolute -right-[25%] top-[8%] h-[min(100vw,600px)] w-[min(100vw,600px)] animate-hero-breathe motion-reduce:animate-none"
        aria-hidden
      >
        <HeroRingAccent className="h-full w-full opacity-90" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_70%_at_45%_40%,black_20%,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(41 37 36 / 0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(41 37 36 / 0.55) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent motion-safe:animate-line-glow motion-reduce:animate-none" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-20 pt-[calc(env(safe-area-inset-top)+3.5rem)] sm:px-6 md:px-10 md:pb-24 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-3 border-b border-ink-800/50 pb-8 sm:flex-row sm:justify-center sm:gap-4">
              <MonadShape className="h-9 w-9 shrink-0 text-monad drop-shadow-[0_0_24px_rgba(104,85,239,0.35)] sm:h-10 sm:w-10" />
              <h2 className="min-w-0 text-center font-display text-2xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-3xl md:text-[clamp(1.5rem,1.1rem+1.5vw,2rem)]">
                Monad Summer Founders Program
              </h2>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-10 w-full min-w-0 lg:mt-14">
            <div className="pointer-events-none absolute -left-3 -top-3 sm:-left-4 sm:-top-4">
              <IconCorner className="h-10 w-10 text-accent/40 sm:h-12 sm:w-12" />
            </div>
            <div className="pointer-events-none absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3">
              <IconCorner className="h-10 w-10 rotate-180 text-accent/30 sm:h-12 sm:w-12" />
            </div>

            <Reveal delay={40}>
              <div className="relative overflow-hidden rounded-2xl border border-ink-800/60 bg-gradient-to-br from-ink-900/40 via-ink-950/20 to-transparent p-6 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.85)] backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-ink-700/70 hover:shadow-[0_40px_120px_-48px_rgba(0,0,0,0.9)] sm:p-8 md:p-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-ink-950/30 motion-safe:animate-hero-card-sheen motion-reduce:animate-none"
                  aria-hidden
                />
                <div className="relative z-10">
                  <HeroLineBurst className="mx-auto mb-6 w-full max-w-[200px] text-ink-100" />

                  <h1 className="mx-auto max-w-xl font-display text-[clamp(1.75rem,calc(0.65rem+3.4vw),2.875rem)] font-bold leading-[1.14] tracking-[-0.03em] text-ink-50 sm:max-w-2xl lg:text-[clamp(1.875rem,calc(0.7rem+2.5vw),3.125rem)] [text-shadow:0_0_48px_rgba(232,220,200,0.06)]">
                    <span className="block bg-gradient-to-r from-ink-50 to-ink-200 bg-clip-text text-transparent">
                      Build before the world
                    </span>
                    <span className="mt-1.5 block sm:mt-2">
                      <span className="text-ink-500">tells you to </span>
                      <span className="bg-gradient-to-r from-ink-100 via-accent to-ink-300 bg-clip-text text-transparent">wait</span>
                      <span className="text-ink-500">.</span>
                    </span>
                  </h1>

                  <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-ink-300 md:text-lg">
                    Prototype-first program for India&apos;s{" "}
                    <span className="font-semibold text-ink-100">misfit student builders</span>. Small stipend, weekly demos, serious
                    standards-on Monad.
                  </p>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 sm:text-[11px]">
                    Rolling review · Shipped work · Not résumés
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-5">
                <a
                  href={APPLY_URL}
                  className="group relative inline-flex w-fit items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink-100 px-10 py-4 font-sans text-sm font-semibold text-ink-950 shadow-hero-cta transition-[background-color,box-shadow,transform] duration-300 hover:bg-white hover:shadow-hero-cta-hover active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition group-hover:opacity-100" />
                  <span className="relative">Apply now</span>
                  <IconArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-600/90 bg-ink-950/50 px-8 py-2.5 font-sans text-sm font-medium text-ink-200 backdrop-blur-sm transition-[border-color,color,transform,box-shadow] duration-300 hover:border-accent/50 hover:text-ink-50 hover:shadow-[0_0_24px_-4px_rgba(232,220,200,0.15)] active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                  How it works
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
