import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";
import { IconArrowUpRight, IconCorner } from "../components/icons";

const heroChips = [
  { label: "Cadence", value: "Weekly demos" },
  { label: "Gate", value: "Build → stipend" },
  { label: "Stack", value: "Monad" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[min(92svh,56rem)] flex-col justify-center overflow-x-hidden border-b border-ink-800/80 pb-20 pt-[calc(env(safe-area-inset-top)+4.25rem)] sm:min-h-[88vh] sm:pb-24 md:pb-28 md:pt-[calc(env(safe-area-inset-top)+5rem)]">
      {/* Reserve space for fixed nav (h-14 + safe area) — content starts below */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(232,220,200,0.12),transparent_58%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[min(28rem,70vw)] w-[min(28rem,70vw)] max-w-none translate-x-[15%] translate-y-[25%] rounded-full bg-ink-800/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-1/4 hidden h-40 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent lg:left-6 xl:left-10" />

      <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 md:px-8">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-ink-700/90 bg-ink-900/70 px-3.5 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-muted shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:px-4 sm:text-[11px]">
              Monad · Summer 2025
            </span>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-stretch lg:gap-14 xl:gap-16">
          <div className="flex min-w-0 flex-col justify-center">
            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(2.125rem,calc(0.5rem+5.5vw),4.15rem)] font-bold leading-[0.96] tracking-[-0.02em] text-ink-50">
                Ship something
                <br />
                <span className="bg-gradient-to-r from-ink-100 via-accent to-ink-400 bg-clip-text text-transparent">
                  real
                </span>{" "}
                this summer.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl border-l-2 border-ink-600/90 pl-5 font-sans text-base leading-relaxed text-ink-300 sm:pl-6 sm:text-lg md:text-xl">
                Small cohort. Monad stack. Weekly demos—then stipend unlocks after you pass the build gate.
                Campus India. Anti-default path.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Program highlights">
                {heroChips.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-baseline gap-2 rounded-lg border border-ink-800/80 bg-ink-900/40 px-3 py-2 font-sans text-xs text-ink-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:px-3.5"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">{c.label}</span>
                    <span className="font-medium text-ink-100">{c.value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href={APPLY_URL}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-100 px-8 py-3.5 font-sans text-sm font-semibold text-ink-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] sm:w-auto"
                >
                  Apply now
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="inline-flex w-fit items-center rounded-full border border-dashed border-ink-600 px-4 py-2.5 text-center font-sans text-sm text-ink-500">
                  Not for everyone
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <aside className="relative flex min-h-0 flex-col justify-center rounded-2xl border-gradient-subtle bg-ink-900/55 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-md sm:p-7 lg:min-h-[17rem] xl:p-8">
              <IconCorner className="pointer-events-none absolute left-3 top-3 h-7 w-7 text-accent/30 sm:left-4 sm:top-4 sm:h-8 sm:w-8" />
              <IconCorner className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 rotate-180 text-accent/25 sm:bottom-4 sm:right-4 sm:h-8 sm:w-8" />
              <p className="font-display text-lg font-semibold leading-snug text-accent sm:text-xl">Filter, don’t funnel.</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-400">
                If you want a line on LinkedIn, skip this. If you want velocity and blunt feedback, read on.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-ink-600 via-ink-500/25 to-transparent" />
              <dl className="mt-6 space-y-4 font-sans text-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink-800/60 pb-4">
                  <dt className="text-ink-500">Format</dt>
                  <dd className="text-right font-medium text-ink-200">Builder cohort</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <dt className="text-ink-500">Energy</dt>
                  <dd className="min-w-0 text-right font-medium leading-snug text-ink-200 sm:max-w-[12rem]">
                    IIT halls, not Sand Hill Rd
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
