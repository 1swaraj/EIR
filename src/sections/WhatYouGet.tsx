import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const cards = [
  {
    title: "Tight feedback loop",
    body: "Operators and builders who’ve shipped. No theory-only office hours—concrete teardowns on product, UX, and chain fit.",
  },
  {
    title: "Ecosystem, not a logo wall",
    body: "Access to the Monad builder graph: intros that matter, not a PDF of “partners.” You earn depth by shipping.",
  },
  {
    title: "Momentum as infrastructure",
    body: "Weekly demos create unavoidable forward motion. Progress isn’t a mood—it’s what you show on Friday.",
  },
];

export function WhatYouGet() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>What you actually get</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
              The stipend isn’t the headline.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-400">
              Money shows up after you prove execution. Before that, you get the things that compound:
              signal, pressure, and peers who don’t flinch.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="min-h-0" delay={i * 80}>
              <article className="group flex h-full min-h-0 flex-col border border-ink-800/80 bg-gradient-to-b from-ink-900/50 to-transparent p-8 transition hover:border-ink-700">
                <h3 className="font-display text-lg font-semibold text-ink-100">{c.title}</h3>
                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-ink-400">{c.body}</p>
                <div className="mt-6 h-px w-8 bg-ink-700 transition group-hover:w-full group-hover:bg-accent-muted/50" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
