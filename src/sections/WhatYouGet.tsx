import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const cards = [
  {
    n: "01",
    title: "Monthly Stipend",
    body: "Enough to keep building without distraction. This isn't a scholarship—it's fuel for momentum.",
  },
  {
    n: "02",
    title: "Weekly Operator Feedback",
    body: "Direct, honest feedback on what you shipped. Not cheerleading. Real signal on what matters next.",
  },
  {
    n: "03",
    title: "Monad Problem Statements",
    body: "Access to curated RFPs, idea banks, and ecosystem-aligned problems worth solving.",
  },
  {
    n: "04",
    title: "Technical Guidance",
    body: "Architecture, protocol design, and engineering support from people who've built at scale.",
  },
  {
    n: "05",
    title: "Founder Network",
    body: "Access to a tight community of other cracked builders, operators, and ecosystem partners.",
  },
  {
    n: "06",
    title: "Path to Funding",
    body: "Breakout teams get support toward grants, deeper backing, and ecosystem distribution.",
  },
];

export function WhatYouGet() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(232,220,200,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>What you get</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
              Small stipend. Serious advantages.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-400">
              The stipend keeps you building. Everything else is why you should be here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="min-h-0" delay={i * 60}>
              <article className="card-interactive group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-ink-800/90 bg-gradient-to-b from-ink-900/70 via-ink-950/40 to-ink-950 p-6 shadow-[0_28px_100px_-56px_rgba(0,0,0,0.9)] hover:border-ink-600/90 sm:p-7">
                <div className="absolute -right-4 -top-2 font-display text-6xl font-bold tabular-nums text-ink-800/80 transition group-hover:text-ink-700/70">
                  {c.n}
                </div>
                <div className="relative">
                  <h3 className="pr-12 font-display text-base font-semibold text-ink-100 sm:text-lg">{c.title}</h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-400">{c.body}</p>
                  <div className="mt-5 flex items-center gap-2">
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
