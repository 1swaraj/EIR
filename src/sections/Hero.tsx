import { Reveal } from "../components/Reveal";
import { HeroDots, HeroLineBurst, HeroRingAccent } from "../components/HeroDecor";
import { APPLY_URL } from "../config";
import { IconArrowUpRight, IconCorner } from "../components/icons";

const keywordPills = [
  "Prototype-first",
  "Weekly demos",
  "Build gate",
  "Monad stack",
  "India cohort",
  "Operator feedback",
  "No deck theater",
];

const bento: {
  n: string;
  title: string;
  desc: string;
  highlight?: boolean;
  shell: string;
}[] = [
  {
    n: "01",
    title: "Demo cadence",
    desc: "Ship something real every week. The room holds you accountable.",
    shell:
      "border-ink-800/80 bg-gradient-to-br from-ink-800/90 to-ink-950/80 hover:border-ink-700/80",
  },
  {
    n: "02",
    title: "Stipend after gate",
    desc: "Prototype first—then unlock support. Merit, not promises.",
    highlight: true,
    shell:
      "border-accent/25 bg-gradient-to-br from-ink-900/50 via-ink-950/80 to-ink-950 ring-1 ring-accent/15 hover:border-accent/35",
  },
  {
    n: "03",
    title: "Ecosystem depth",
    desc: "Problem statements, guidance, and builders who’ve shipped.",
    shell:
      "border-ink-800/80 bg-gradient-to-br from-ink-800/80 to-ink-950/85 hover:border-ink-700/80",
  },
];

function ScrollCue() {
  return (
    <a
      href="#process"
      className="group absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
      aria-label="Scroll to content"
    >
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-ink-500 transition group-hover:text-accent-muted">
        Explore
      </span>
      <span className="flex h-11 w-6 items-start justify-center rounded-full border border-ink-600/90 bg-gradient-to-b from-ink-900/80 to-ink-950/90 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
        <span className="h-2 w-0.5 animate-bounce rounded-full bg-gradient-to-b from-accent to-accent-muted motion-reduce:animate-none" />
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-ink-800/80">
      {/* —— Atmospheric stack —— */}
      <div className="pointer-events-none absolute inset-0 bg-ink-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_10%_-15%,rgba(232,220,200,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_20%,rgba(87,83,78,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/30 to-ink-950" />
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
      <div className="pointer-events-none absolute bottom-24 left-8 opacity-40 md:left-16">
        <HeroDots className="h-28 w-28 text-ink-500" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-32 pt-[calc(env(safe-area-inset-top)+3.5rem)] sm:px-6 md:px-10 md:pb-36 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          {/* Top ribbon: status + badges */}
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="relative flex items-center gap-2 rounded-full border border-ink-700/80 bg-ink-950/70 py-1.5 pl-2 pr-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:text-[11px]">
                  <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-ink-800/90 ring-1 ring-ink-600/80">
                    <span className="absolute h-2 w-2 animate-pulse rounded-full bg-accent/90 shadow-[0_0_12px_rgba(232,220,200,0.45)] motion-reduce:animate-none" />
                  </span>
                  Accepting applications
                </span>
                <span className="rounded-full border border-dashed border-ink-600/70 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-ink-500">
                  India · Student builders
                </span>
              </div>
              <div className="hidden font-display text-5xl font-bold tabular-nums leading-none text-ink-900/50 sm:block md:text-6xl">
                2025
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
            {/* Left: headline + copy */}
            <div className="relative min-w-0 lg:col-span-7">
              <div className="pointer-events-none absolute -left-3 -top-3 sm:-left-4 sm:-top-4">
                <IconCorner className="h-10 w-10 text-accent/40 sm:h-12 sm:w-12" />
              </div>
              <div className="pointer-events-none absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3">
                <IconCorner className="h-10 w-10 rotate-180 text-accent/30 sm:h-12 sm:w-12" />
              </div>

              <Reveal delay={40}>
                <div className="relative rounded-2xl border border-ink-800/60 bg-gradient-to-br from-ink-900/40 via-ink-950/20 to-transparent p-6 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:p-8 md:p-10">
                  <HeroLineBurst className="mb-6 w-full max-w-[200px] text-ink-100" />

                  <h1 className="max-w-xl font-display text-[clamp(1.75rem,calc(0.65rem+3.4vw),2.875rem)] font-bold leading-[1.14] tracking-[-0.03em] text-ink-50 sm:max-w-2xl lg:text-[clamp(1.875rem,calc(0.7rem+2.5vw),3.125rem)] [text-shadow:0_0_48px_rgba(232,220,200,0.06)]">
                    <span className="block bg-gradient-to-r from-ink-50 to-ink-200 bg-clip-text text-transparent">
                      Build before the world
                    </span>
                    <span className="mt-1.5 block sm:mt-2">
                      <span className="text-ink-500">tells you to </span>
                      <span className="bg-gradient-to-r from-ink-100 via-accent to-ink-300 bg-clip-text text-transparent">wait</span>
                      <span className="text-ink-500">.</span>
                    </span>
                  </h1>

                  <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink-300 md:text-lg">
                    Prototype-first program for India&apos;s{" "}
                    <span className="font-semibold text-ink-100">misfit student builders</span>. Small stipend, weekly demos, serious
                    standards—on Monad.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {keywordPills.map((p) => (
                      <span
                        key={p}
                        className="rounded-md border border-ink-700/80 bg-ink-950/50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-accent-muted"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 sm:text-[11px]">
                    Rolling review · Shipped work · Not résumés
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-5">
                  <a
                    href={APPLY_URL}
                    className="group relative inline-flex w-fit items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink-100 px-10 py-4 font-sans text-sm font-semibold text-ink-950 shadow-hero-cta transition hover:bg-white hover:shadow-hero-cta-hover"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition group-hover:opacity-100" />
                    <span className="relative">Apply now</span>
                    <IconArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-600/90 bg-ink-950/50 px-8 py-2.5 font-sans text-sm font-medium text-ink-200 backdrop-blur-sm transition hover:border-accent/50 hover:text-ink-50"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    How it works
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: bento stack */}
            <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
              {bento.map((card, i) => (
                <Reveal key={card.n} delay={80 + i * 70}>
                  <div
                    className={`group relative overflow-hidden rounded-2xl border p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md transition sm:p-6 ${card.shell}`}
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition group-hover:bg-accent/10" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-bold tabular-nums text-accent-muted/90">{card.n}</span>
                      {card.highlight ? (
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent">
                          Core
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold text-ink-50 sm:text-xl">{card.title}</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-500">{card.desc}</p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-ink-700/80 via-transparent to-transparent" />
                  </div>
                </Reveal>
              ))}

              <Reveal delay={320}>
                <div className="relative overflow-hidden rounded-2xl border border-ink-800/80 bg-ink-950/60 p-5 backdrop-blur-md">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,220,200,0.04)_0%,transparent_50%)]" />
                  <div className="relative flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">Stack</p>
                      <p className="mt-1 font-display text-xl font-bold text-ink-100">Monad</p>
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-ink-600 to-transparent" />
                    <div className="text-right">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">Energy</p>
                      <p className="mt-1 font-sans text-sm font-medium text-ink-300">Campus India</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
