import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const cards = [
  {
    n: "01",
    tag: "Signal",
    title: "Tight feedback loop",
    body: "Operators and builders who’ve shipped. No theory-only office hours—concrete teardowns on product, UX, and chain fit.",
  },
  {
    n: "02",
    tag: "Depth",
    title: "Ecosystem, not a logo wall",
    body: "Access to the Monad builder graph: intros that matter, not a PDF of “partners.” You earn depth by shipping.",
  },
  {
    n: "03",
    tag: "Velocity",
    title: "Momentum as infrastructure",
    body: "Weekly demos create unavoidable forward motion. Progress isn’t a mood—it’s what you show on Friday.",
  },
];

export function WhatYouGet() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(232,220,200,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
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
              <article className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-ink-800/90 bg-gradient-to-b from-ink-900/70 via-ink-950/40 to-ink-950 p-8 shadow-[0_28px_100px_-56px_rgba(0,0,0,0.9)] transition hover:border-ink-600/90 hover:shadow-[0_36px_120px_-48px_rgba(0,0,0,0.85)]">
                <div className="absolute -right-6 -top-6 font-display text-7xl font-bold tabular-nums text-ink-800/90 transition group-hover:text-ink-700/80">
                  {c.n}
                </div>
                <div className="relative">
                  <span className="inline-flex rounded-full border border-ink-700/80 bg-ink-900/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-muted">
                    {c.n} · {c.tag}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">{c.title}</h3>
                  <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-ink-400">{c.body}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px w-8 bg-ink-600 transition group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-accent/60 group-hover:to-transparent" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
