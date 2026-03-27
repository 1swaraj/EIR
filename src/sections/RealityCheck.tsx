import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function RealityCheck() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.5)_0%,transparent_40%,rgba(12,10,9,0.6)_100%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <SectionLabel>Reality check</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl">
                Most “programs” optimize for attendance.
              </h2>
              <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-accent/40 to-transparent lg:block" aria-hidden />
            </Reveal>
          </div>
          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <div className="space-y-6 rounded-2xl border border-ink-800/60 bg-ink-900/25 p-8 font-sans text-base leading-relaxed text-ink-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-10">
                <p>
                  Hackathons that end in slides. Fellowships that want essays about “impact.” Internships
                  that train you to inherit someone else’s roadmap.
                </p>
                <p className="border-l-2 border-accent/40 pl-5 font-display text-lg font-semibold leading-snug text-ink-100">
                  That isn’t wrong—it’s just not this.
                </p>
                <p>
                  Summer Founders exists because a small slice of campus would rather ship under pressure
                  than collect credentials under glass.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
