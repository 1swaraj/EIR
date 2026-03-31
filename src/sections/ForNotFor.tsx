import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { IconCheck, IconX } from "../components/icons";

const forItems = [
  "You've shipped something-even if it's ugly, broken, or unfinished",
  "You build on weekends because you can't not build",
  "You've deviated from the default placement path (or you're about to)",
  "You're comfortable with iteration, pivots, and ambiguity",
  "You want founder-quality feedback, not a certificate",
];

const notItems = [
  "You're collecting fellowships for your LinkedIn",
  "You have an idea but zero shipped artifacts",
  "You can't commit to weekly demos",
  "You're optimizing for the stipend, not the work",
  "You need permission to start building",
];

export function ForNotFor() {
  return (
    <section id="fit" className="relative scroll-mt-28 border-b border-zinc-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(131,110,249,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>Self-select</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-fg-primary md:text-4xl">
            Not for everyone. Good.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="min-h-0" delay={80}>
            <div className="card-interactive relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-8 shadow-soft md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200/80">
                  <IconCheck className="h-4 w-4 text-emerald-700" />
                </span>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">For you</p>
              </div>
              <ul className="mt-8 space-y-4 font-sans text-sm leading-relaxed text-fg-secondary">
                {forItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-100/80">
                      <IconCheck className="h-3.5 w-3.5 text-emerald-700" />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="min-h-0" delay={160}>
            <div className="card-interactive relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-8 md:p-10">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,rgba(228,228,231,0.5)_8px,rgba(228,228,231,0.5)_9px)] opacity-60" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200/80 ring-1 ring-zinc-300/80">
                  <IconX className="h-4 w-4 text-zinc-500" />
                </span>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-fg-muted">Not for you</p>
              </div>
              <ul className="relative mt-8 space-y-4 font-sans text-sm leading-relaxed text-fg-muted">
                {notItems.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-200/60">
                      <IconX className="h-3.5 w-3.5 text-zinc-500" />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
