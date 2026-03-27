import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { IconCorner } from "../components/icons";

export function WeeklyDemo() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-24 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,220,200,0.06),transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="min-w-0">
            <Reveal>
              <SectionLabel>Weekly demo culture</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl">
                Friday is the contract.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 rounded-xl border border-ink-800/70 bg-ink-900/30 p-6 font-sans text-base leading-relaxed text-ink-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                Every week you show working product—not roadmap theater. Miss twice without a real blocker
                and you’re out of sync with the cohort. That’s the deal.
              </p>
            </Reveal>
          </div>

          <Reveal className="min-w-0" delay={80}>
            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-ink-700/80 bg-[linear-gradient(180deg,rgba(28,25,23,0.9)_0%,rgba(12,10,9,0.95)_100%)] p-6 shadow-[0_28px_100px_-56px_rgba(0,0,0,0.9)] md:p-8">
              <IconCorner className="absolute left-3 top-3 h-7 w-7 text-accent/35 md:left-4 md:top-4" />
              <IconCorner className="absolute bottom-3 right-3 h-7 w-7 rotate-180 text-accent/30 md:bottom-4 md:right-4" />
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500">
                {"// demo_terms.md"}
              </p>
              <div className="mt-6 space-y-0">
                {[
                  { k: "Progress means", v: "Diff users can feel—not slides." },
                  { k: "Silence means", v: "You’re hiding. Fix it or say so." },
                  { k: "Intensity means", v: "Same bar for everyone. No exceptions." },
                ].map((row, idx) => (
                  <div
                    key={row.k}
                    className={`flex flex-col gap-2 border-ink-800/80 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                      idx < 2 ? "border-b" : ""
                    }`}
                  >
                    <span className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-muted">
                      {row.k}
                    </span>
                    <span className="font-sans text-sm font-medium text-ink-100 sm:text-right">{row.v}</span>
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
