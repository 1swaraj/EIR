import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";
import { IconArrowUpRight, IconCorner } from "../components/icons";

export function FinalCTA() {
  return (
    <section id="apply" className="scroll-mt-28 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="card-interactive relative overflow-hidden rounded-3xl border border-ink-800/90 bg-gradient-to-br from-ink-900/80 via-ink-950 to-ink-950 px-8 py-16 shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)] md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(232,220,200,0.08),transparent_55%)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ink-800/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <IconCorner className="pointer-events-none absolute left-5 top-5 h-9 w-9 text-accent/25 md:left-8 md:top-8" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <Reveal>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-[2.35rem]">
                  If you need convincing, you&apos;re not ready.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-ink-400">
                  Applications are reviewed on a rolling basis. Bring receipts-repos, demos, users if you have them. We move fast and
                  tell you straight.
                </p>
              </Reveal>
            </div>
            <Reveal className="min-w-0 shrink-0" delay={120}>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={APPLY_URL}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-100 px-10 py-4 font-sans text-sm font-semibold text-ink-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[background-color,transform,box-shadow] duration-300 hover:bg-white hover:shadow-hero-cta-hover active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0 lg:w-auto"
                >
                  Apply now
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-ink-800/80 pt-10 font-sans text-xs text-ink-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Monad Summer Founders Program</span>
          <span className="text-center text-ink-700 md:text-right">
            Built for builders, by builders · For student builders who ship
          </span>
        </footer>
      </div>
    </section>
  );
}
