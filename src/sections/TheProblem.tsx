import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function TheProblem() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.5)_0%,transparent_40%,rgba(12,10,9,0.6)_100%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Two balanced columns — no empty 12-col gutter that reads as a “void” */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:max-w-xl">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink-50 md:text-4xl lg:text-[2.35rem]">
                Most student programs reward the wrong people.
              </h2>
              <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-accent/40 to-transparent lg:block" aria-hidden />
            </Reveal>
          </div>
          <div className="min-w-0">
            <Reveal delay={100}>
              <div className="card-interactive space-y-6 rounded-2xl border border-ink-800/60 bg-ink-900/25 p-8 font-sans text-base leading-relaxed text-ink-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-10">
                <p>
                  They attract résumé-builders, stipend optimizers, and polished pitch-deck recitors. The actual builders—the ones who
                  ship at 2am, who have half-broken prototypes living on Vercel—never apply. Or worse, they get filtered out.
                </p>
                <p>We designed this program to invert that selection.</p>
                <p className="border-l-2 border-accent/50 pl-5 font-display text-base font-semibold leading-snug text-ink-100 md:text-lg">
                  No pitch decks. No essays about your &quot;vision.&quot; Show us what you&apos;ve built. Then build more—every week—or
                  you&apos;re out.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
