import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function TheProblem() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.5)_0%,transparent_40%,rgba(12,10,9,0.6)_100%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Single column - headline first, card below - avoids side-by-side density */}
        <div className="mx-auto max-w-[42rem]">
          <Reveal>
            <SectionLabel>The problem</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-ink-50 md:text-4xl md:leading-[1.15] lg:text-[2.35rem]">
              Most student programs reward the wrong people.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <div className="card-interactive mt-12 rounded-2xl border border-ink-800/50 bg-ink-900/25 p-8 font-sans text-ink-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:mt-14 md:p-10">
              <div className="space-y-6 text-[0.9375rem] leading-[1.75] md:text-base md:leading-[1.7]">
                <p>
                  They attract résumé-builders, stipend optimizers, and polished pitch-deck recitors. The actual builders-the ones who
                  ship at 2am, who have half-broken prototypes living on Vercel-never apply. Or worse, they get filtered out.
                </p>
                <p className="text-ink-400">We designed this program to invert that selection.</p>
              </div>

              <p className="mt-8 border-l-2 border-accent/45 pl-6 pt-1 font-display text-base font-semibold leading-relaxed text-ink-100 md:mt-10 md:text-lg md:leading-snug">
                No pitch decks. No essays about your &quot;vision.&quot; Show us what you&apos;ve built. Then build more-every week-or
                you&apos;re out.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
