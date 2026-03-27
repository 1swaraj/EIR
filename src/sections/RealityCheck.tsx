import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

export function RealityCheck() {
  return (
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <SectionLabel>Reality check</SectionLabel>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-4xl">
                Most “programs” optimize for attendance.
              </h2>
            </Reveal>
          </div>
          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <div className="space-y-6 font-sans text-base leading-relaxed text-ink-300">
                <p>
                  Hackathons that end in slides. Fellowships that want essays about “impact.”
                  Internships that train you to inherit someone else’s roadmap.
                </p>
                <p className="text-ink-200">
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
