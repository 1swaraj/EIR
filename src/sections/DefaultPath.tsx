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
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,220,200,0.05),transparent_65%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>The fork</SectionLabel>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            The default path is crowded.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-ink-400 md:text-lg">
            Placements are fine. Safe is fine. But if you already know you want to build something of your own—why wait?
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="min-h-0" delay={80}>
            <div className="card-interactive flex h-full min-h-0 flex-col rounded-2xl border border-ink-800/80 bg-ink-950/60 p-8 md:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-500">Default</p>
              <ul className="mt-8 space-y-3 font-sans text-sm leading-relaxed text-ink-500">
                {defaultItems.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-ink-600">→</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="min-h-0" delay={140}>
            <div className="card-interactive relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-ink-700/80 bg-gradient-to-b from-ink-900/50 to-ink-950/90 p-8 shadow-[0_28px_100px_-56px_rgba(0,0,0,0.85)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent-muted">Founder</p>
              <ul className="mt-8 space-y-3 font-sans text-sm leading-relaxed text-ink-200">
                {founderItems.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-accent/70">→</span>
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
