import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { IconCorner } from "../components/icons";

const progressGrid = [
  { label: "Counts as progress", items: ["Working feature", "User interviews + pivot", "Growth experiment + data"] },
  { label: "Does NOT count", items: ['Pitch deck updates', '"Research"', "Vague plans"] },
  { label: "The standard", items: ["Shipped > talked about", "Learned > assumed", "Iterated > planned"] },
];

export function WeeklyDemo() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-24 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,220,200,0.06),transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="min-w-0">
            <Reveal>
              <SectionLabel>Weekly demo culture</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl lg:text-5xl">
                Weekly demo is the contract.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink-300 md:text-lg">
                <p>
                  Every week, you show what you shipped. Product progress. User learning plus iteration. A distribution experiment with
                  real data. Doesn&apos;t need to be perfect. Needs to be real.
                </p>
                <p>
                  Miss two demos in any rolling four-week window, and you&apos;re out. No exceptions. No &quot;I was busy with
                  exams.&quot;
                </p>
                <p className="border-l-2 border-accent/40 pl-5 font-medium text-ink-100">
                  We review what you shipped, why it mattered, what you learned, and what the smallest next de-risking step is.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="min-w-0" delay={80}>
            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-ink-700/80 bg-[linear-gradient(180deg,rgba(28,25,23,0.9)_0%,rgba(12,10,9,0.95)_100%)] p-6 shadow-[0_28px_100px_-56px_rgba(0,0,0,0.9)] md:p-8">
              <IconCorner className="absolute left-3 top-3 h-7 w-7 text-accent/35 md:left-4 md:top-4" />
              <IconCorner className="absolute bottom-3 right-3 h-7 w-7 rotate-180 text-accent/30 md:bottom-4 md:right-4" />
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500">{"// demo_bar.md"}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
                {progressGrid.map((col) => (
                  <div key={col.label} className="rounded-xl border border-ink-800/80 bg-ink-950/50 p-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-muted">{col.label}</p>
                    <ul className="mt-3 space-y-2 font-sans text-xs leading-snug text-ink-300">
                      {col.items.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
