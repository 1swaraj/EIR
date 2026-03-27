import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";

export function Hero() {
  return (
    <header className="relative min-h-[88vh] overflow-x-hidden border-b border-ink-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(232,220,200,0.08),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-ink-800/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-[max(7rem,calc(env(safe-area-inset-top)+5.5rem))] md:px-8 md:pt-36">
        <Reveal>
          <p className="mb-8 max-w-md font-sans text-xs font-medium uppercase tracking-[0.25em] text-accent-muted">
            Monad · Summer 2025
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[0.95] tracking-tight text-ink-50">
                Ship something
                <br />
                <span className="text-ink-400">real</span> this summer.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ink-300 md:text-xl">
                Small cohort. Monad stack. Weekly demos—then stipend unlocks after you pass the build gate.
                Campus India. Anti-default path.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={APPLY_URL}
                  className="inline-flex items-center justify-center rounded-full bg-ink-100 px-8 py-3.5 font-sans text-sm font-semibold text-ink-950 transition hover:bg-white"
                >
                  Apply now
                </a>
                <span className="font-sans text-sm text-ink-500">
                  Not for everyone.
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <aside className="border border-ink-800/80 bg-ink-900/40 p-6 backdrop-blur-sm lg:mb-2">
              <p className="font-display text-lg font-semibold text-accent">
                Filter, don’t funnel.
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-400">
                If you want a line on LinkedIn, skip this. If you want velocity and blunt feedback, read on.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-ink-700 to-transparent" />
              <dl className="mt-6 space-y-4 font-sans text-sm">
                <div className="flex justify-between gap-4 border-b border-ink-800/60 pb-4">
                  <dt className="text-ink-500">Format</dt>
                  <dd className="text-right font-medium text-ink-200">Builder cohort</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Energy</dt>
                  <dd className="text-right font-medium text-ink-200">IIT halls, not Sand Hill Rd</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
