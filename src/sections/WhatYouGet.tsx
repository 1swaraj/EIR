import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const cards = [
  {
    n: "01",
    title: "Monthly Stipend",
    body: "Enough to keep building without distraction. This isn't a scholarship-it's fuel for momentum.",
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
    <section id="program" className="relative scroll-mt-28 border-b border-zinc-200/80 bg-surface-muted/50 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(131,110,249,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>What you get</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg-primary md:text-4xl">
              You&apos;re already building. Now get paid to keep going.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-fg-secondary">
              Support for momentum. Everything else is why you should be here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} className="min-h-0" delay={i * 60}>
              <article className="card-interactive group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-soft hover:border-monad/30 sm:p-7">
                <div className="absolute -right-4 -top-2 font-display text-6xl font-bold tabular-nums text-zinc-100 transition group-hover:text-monad/15">
                  {c.n}
                </div>
                <div className="relative">
                  <h3 className="pr-12 font-display text-base font-semibold text-fg-primary sm:text-lg">{c.title}</h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-fg-secondary">{c.body}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-px w-8 bg-zinc-200 transition group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-monad/50 group-hover:to-transparent" />
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
