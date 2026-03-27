import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const forItems = [
  "You already build—repos, prototypes, side projects—not just ideate.",
  "You want sharp critique from people who ship on-chain, not polite panels.",
  "You’re fine being wrong in public if it gets you to v1 faster.",
];

const notItems = [
  "You need a certificate to justify the summer to parents or placements.",
  "You want guaranteed funding before you write a line of product.",
  "You treat crypto as a vibe or a resume keyword—not a design space.",
];

export function ForNotFor() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>Hard filter</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            Self-select out early.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="min-h-0" delay={80}>
            <div className="flex h-full min-h-0 flex-col border border-ink-800 bg-ink-900/30 p-8 md:p-10">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                For you
              </p>
              <ul className="mt-8 space-y-5 font-sans text-sm leading-relaxed text-ink-200">
                {forItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="min-h-0" delay={160}>
            <div className="flex h-full min-h-0 flex-col border border-ink-800/60 bg-ink-950 p-8 md:p-10">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                Not for you
              </p>
              <ul className="mt-8 space-y-5 font-sans text-sm leading-relaxed text-ink-500">
                {notItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-700" />
                    {line}
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
