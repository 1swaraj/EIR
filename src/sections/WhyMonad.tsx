import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function WhyMonad() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(232,220,200,0.05),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <SectionLabel>Why Monad</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl lg:text-5xl">
                A technical frontier
                <br />
                worth building on.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink-300 md:text-lg">
                <p className="rounded-lg border-l-2 border-ink-700 pl-5">
                  Monad is a high-performance EVM-compatible L1 built for real throughput. It&apos;s the kind of infrastructure that
                  creates room for ambitious applications that weren&apos;t possible before.
                </p>
                <p>
                  This program gives you direct access to the ecosystem-problem statements, technical guidance, and distribution
                  pathways that independent builders don&apos;t typically get.
                </p>
                <p className="font-medium text-ink-100">
                  You don&apos;t need to be crypto-native to apply. You need to be the kind of builder who gets excited by hard
                  infrastructure problems and wants to ship something real.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="min-h-0 lg:col-span-4 lg:col-start-9" delay={120}>
            <div className="border-gradient-subtle card-interactive relative flex h-full min-h-0 flex-col justify-center overflow-hidden rounded-2xl bg-ink-950 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)]">
              <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <p className="font-display text-xl font-semibold text-accent">Throughput that earns the UX.</p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink-500">
                  Build where latency and cost stop being the excuse-and product becomes the argument.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
