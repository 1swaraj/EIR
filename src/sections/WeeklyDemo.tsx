import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function WeeklyDemo() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="min-w-0">
            <Reveal>
              <SectionLabel>Weekly demo culture</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl">
                Friday is the contract.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-sans text-base leading-relaxed text-ink-300">
                Every week you show working product—not roadmap theater. Miss twice without a real blocker
                and you’re out of sync with the cohort. That’s the deal.
              </p>
            </Reveal>
          </div>

          <Reveal className="min-w-0" delay={80}>
            <div className="min-w-0 space-y-4">
              {[
                { k: "Progress means", v: "Diff users can feel—not slides." },
                { k: "Silence means", v: "You’re hiding. Fix it or say so." },
                { k: "Intensity means", v: "Same bar for everyone. No exceptions." },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex flex-col gap-2 border-b border-ink-800/80 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="shrink-0 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                    {row.k}
                  </span>
                  <span className="font-sans text-sm font-medium text-ink-200 sm:text-right">{row.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
