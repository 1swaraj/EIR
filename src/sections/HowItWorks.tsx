import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Sourced & Screened",
    body: "We find you through scout networks, campus signals, and outbound. Quick screen-shipped work matters more than pedigree.",
    highlight: false,
  },
  {
    n: "02",
    title: "Build Gate",
    body: "Before any stipend begins, you build a simple prototype in 14–28 days. Monad-aligned idea or your own (with approval). No slides. Just code.",
    highlight: true,
  },
  {
    n: "03",
    title: "Working Demo + Tradeoffs",
    body: "Pass condition: a working demo and a clear explanation of tradeoffs made. We're checking for taste, speed, and self-awareness.",
    highlight: false,
  },
  {
    n: "04",
    title: "Stipend Phase",
    body: "Up to 6 months. Monthly stipend. Weekly demos. Ship product progress, user learnings, or distribution experiments with real data.",
    highlight: false,
  },
  {
    n: "05",
    title: "Breakout Support",
    body: "Show real traction? We help with grants, funding support, distribution, and deeper ecosystem backing.",
    highlight: false,
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-28 relative border-b border-zinc-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90vw,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>The process</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg-primary md:text-4xl lg:text-5xl">
            Prove it, then get paid.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 55}>
              <div
                className={`flex gap-5 border-b border-zinc-200/80 py-8 transition-colors duration-300 last:border-b-0 md:gap-8 md:py-10 ${
                  s.highlight
                    ? "relative -mx-4 rounded-xl border border-monad/25 bg-gradient-to-br from-monad/[0.06] to-white px-4 shadow-soft md:-mx-6 md:px-6"
                    : "rounded-lg md:-mx-2 md:px-2 hover:bg-zinc-50/80"
                }`}
              >
                <span className="w-9 shrink-0 pt-1 font-mono text-xs font-medium tabular-nums text-fg-subtle">{s.n}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-fg-primary">{s.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-fg-secondary md:text-[0.9375rem]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
