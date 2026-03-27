import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";

export function FinalCTA() {
  return (
    <section id="apply" className="scroll-mt-28 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden border border-ink-800 bg-ink-900/40 px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ink-800/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <Reveal>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-50 md:text-[2.35rem]">
                  If you need convincing, you’re not ready.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-ink-400">
                  Applications are read by humans. Bring receipts—code, demos, traction. We’ll move fast and
                  tell you straight.
                </p>
              </Reveal>
            </div>
            <Reveal className="min-w-0 shrink-0" delay={120}>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={APPLY_URL}
                  className="inline-flex w-full items-center justify-center rounded-full bg-ink-100 px-10 py-4 font-sans text-sm font-semibold text-ink-950 transition hover:bg-white lg:w-auto"
                >
                  Apply now
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-ink-900 pt-10 font-sans text-xs text-ink-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Monad Summer Founders</span>
          <span className="text-ink-700">Campus India · Builders only</span>
        </footer>
      </div>
    </section>
  );
}
