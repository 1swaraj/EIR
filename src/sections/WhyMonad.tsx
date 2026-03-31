import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function WhyMonad() {
  return (
    <section id="why-monad" className="relative scroll-mt-28 border-b border-zinc-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(131,110,249,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <SectionLabel>Why Monad</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg-primary md:text-4xl lg:text-5xl">
                A technical frontier
                <br />
                worth building on.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-fg-secondary md:text-lg">
                <p className="rounded-lg border-l-2 border-zinc-200 pl-5 text-fg-secondary">
                  Monad is a high-performance EVM-compatible L1 built for real throughput. It&apos;s the kind of infrastructure that
                  creates room for ambitious applications that weren&apos;t possible before.
                </p>
                <p>
                  This program gives you direct access to the ecosystem-problem statements, technical guidance, and distribution
                  pathways that independent builders don&apos;t typically get.
                </p>
                <p className="font-medium text-fg-primary">
                  You don&apos;t need to be crypto-native to apply. You need to be the kind of builder who gets excited by hard
                  problems-whether that&apos;s infrastructure, consumer, or something in between-and wants to ship something real.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="min-h-0 lg:col-span-4 lg:col-start-9" delay={120}>
            <div className="card-interactive relative flex h-full min-h-0 flex-col justify-center overflow-hidden rounded-2xl border border-monad/20 bg-gradient-to-br from-monad/[0.08] to-white p-8 shadow-soft">
              <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-monad/15 blur-3xl" />
              <div className="relative">
                <p className="font-display text-xl font-semibold text-monad-deep">Throughput that earns the UX.</p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-fg-secondary">
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
