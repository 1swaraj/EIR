import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Apply with proof",
    body: "Link work we can inspect—repos, demos, writing. No generic essays.",
  },
  {
    n: "02",
    title: "Onboard & scope",
    body: "Lock a summer-sized problem. Narrow beats noble.",
  },
  {
    n: "03",
    title: "Build gate",
    body: "Ship to a defined milestone on Monad. Stipend unlocks here—not before.",
  },
  {
    n: "04",
    title: "Demo cadence",
    body: "Weekly demos until the cohort ends. No disappearing acts.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            Build first. Stipend after the gate.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-ink-800/80 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="h-full min-h-0" delay={i * 70}>
              <div className="flex h-full min-h-0 gap-6 bg-ink-950 p-8 md:p-10">
                <span className="font-display text-sm font-bold tabular-nums text-ink-600">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-100">{s.title}</h3>
                  <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-ink-400">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
