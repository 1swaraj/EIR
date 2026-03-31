import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function TheProblem() {
  return (
    <section id="problem" className="relative scroll-mt-28 border-b border-zinc-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,250,0.9)_0%,transparent_35%,rgba(255,255,255,1)_100%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[42rem]">
          <Reveal>
            <SectionLabel>The problem</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-fg-primary md:text-4xl md:leading-[1.15] lg:text-[2.35rem]">
              Most student programs reward the wrong people.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <div className="card-interactive mt-12 rounded-2xl border border-zinc-200/90 bg-surface-muted/80 p-8 shadow-soft md:mt-14 md:p-10">
              <div className="space-y-6 text-[0.9375rem] leading-[1.75] text-fg-secondary md:text-base md:leading-[1.7]">
                <p>
                  They attract résumé-builders, credential hunters, and polished pitch-deck recitors. The actual builders—the ones who
                  ship at 2am, who have half-broken prototypes living on Vercel—never apply. Or worse, they get filtered out.
                </p>
                <p className="text-fg-muted">We designed this program to invert that selection.</p>
              </div>

              <p className="mt-8 border-l-2 border-monad/50 pl-6 pt-1 font-display text-base font-semibold leading-relaxed text-fg-primary md:mt-10 md:text-lg md:leading-snug">
                No pitch decks. No essays about your &quot;vision.&quot; Show us what you&apos;ve built. Then build more—every week—or
                you&apos;re out.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
