import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const defaultItems = [
  "Placement prep from 3rd year",
  "Resume-first everything",
  "Build after getting permission",
  "Ship maybe after 5 years of experience",
  `"I'll start a company someday"`,
];

const founderItems = [
  "Ship a prototype this month",
  "Get real users, real feedback",
  "Weekly accountability with operators",
  "Build a track record while still in college",
  `"I'm building right now"`,
];

export function DefaultPath() {
  return (
    <section id="fork" className="relative scroll-mt-28 border-b border-zinc-200/80 bg-surface-muted/50 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(131,110,249,0.08),transparent_65%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>The fork</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-fg-primary md:text-4xl">
            The default path is crowded.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-fg-secondary md:text-lg">
            Placements are fine. Safe is fine. But if you already know you want to build something of your own—why wait?
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="min-h-0" delay={80}>
            <div className="card-interactive flex h-full min-h-0 flex-col rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-soft md:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fg-subtle">Default</p>
              <ul className="mt-8 space-y-3 font-sans text-sm leading-relaxed text-fg-muted">
                {defaultItems.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-zinc-400">→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="min-h-0" delay={140}>
            <div className="card-interactive relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-monad/25 bg-gradient-to-b from-white to-monad/[0.06] p-8 shadow-soft-lg md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-monad/25 to-transparent" />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-monad">Founder</p>
              <ul className="mt-8 space-y-3 font-sans text-sm leading-relaxed text-fg-secondary">
                {founderItems.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-monad">→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
