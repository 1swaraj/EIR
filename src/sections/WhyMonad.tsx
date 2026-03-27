import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function WhyMonad() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <SectionLabel>Why Monad</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
                Built for applications, not slogans.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink-300">
                <p>
                  You’re not here to debate chain theology. You’re here because execution on L1 should feel
                  fast enough that product decisions stay in your head—not in gas math.
                </p>
                <p>
                  Monad’s builder advantage is simple: room to iterate where users notice. Fewer excuses
                  between “idea” and “someone used it.”
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="min-h-0 lg:col-span-4 lg:col-start-9" delay={120}>
            <div className="flex h-full min-h-0 flex-col justify-center border border-dashed border-ink-700 bg-ink-900/20 p-8">
              <p className="font-display text-xl font-semibold text-accent">
                Ship where latency isn’t the villain.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-500">
                Use the stack as a constraint that sharpens UX—not as marketing filler in your pitch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
