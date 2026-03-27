import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Apply with proof",
    body: "Link work we can inspect—repos, demos, writing. No generic essays.",
    highlight: false,
  },
  {
    n: "02",
    title: "Onboard & scope",
    body: "Lock a summer-sized problem. Narrow beats noble.",
    highlight: false,
  },
  {
    n: "03",
    title: "Build gate",
    body: "Ship to a defined milestone on Monad. Stipend unlocks here—not before.",
    highlight: true,
  },
  {
    n: "04",
    title: "Demo cadence",
    body: "Weekly demos until the cohort ends. No disappearing acts.",
    highlight: false,
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90vw,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink-700/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            Build first. Stipend after the gate.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-800/80 bg-ink-800/80 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="h-full min-h-0" delay={i * 70}>
              <div
                className={`relative flex h-full min-h-0 gap-6 bg-ink-950 p-8 md:p-10 ${
                  s.highlight
                    ? "bg-[linear-gradient(135deg,rgba(232,220,200,0.07)_0%,rgba(12,10,9,1)_48%)] shadow-[inset_3px_0_0_0_rgba(232,220,200,0.45)]"
                    : ""
                }`}
              >
                <div className="relative flex shrink-0 flex-col items-center">
                  <span className="font-display text-sm font-bold tabular-nums text-ink-500">{s.n}</span>
                  <span className="mt-2 block h-12 w-px bg-gradient-to-b from-ink-600 to-transparent md:h-16" aria-hidden />
                </div>
                <div className="relative min-w-0">
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
