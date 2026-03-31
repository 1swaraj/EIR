import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

type DemoColumn = {
  label: string;
  items: readonly string[];
  mutedLabel?: boolean;
};

const progressGrid: DemoColumn[] = [
  { label: "Counts as progress", items: ["Working feature", "User interviews + pivot", "Growth experiment + data"] },
  { label: "Does NOT count", items: ['Pitch deck updates', '"Research"', "Vague plans"], mutedLabel: true },
  { label: "The standard", items: ["Shipped > talked about", "Learned > assumed", "Iterated > planned"] },
];

export function WeeklyDemo() {
  return (
    <section id="demos" className="relative scroll-mt-28 overflow-hidden border-b border-zinc-200/80 bg-surface-muted/50 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(131,110,249,0.08),transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(228 228 231 / 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(228 228 231 / 0.7) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Weekly demo culture</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-fg-primary md:text-4xl">
              Weekly demo is the contract.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-fg-secondary">
              <p>
                Each week you show what you shipped: product progress, user learning, or a distribution experiment with real data.
                Doesn&apos;t need to be perfect—it needs to be real.
              </p>
              <p className="text-fg-primary/90">
                Miss two demos in any rolling four-week window and you&apos;re out. No exceptions.
              </p>
              <p className="border-l-2 border-monad/35 pl-4 text-sm text-fg-muted">
                We review what shipped, why it mattered, what you learned, and the smallest next de-risking step.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 w-full md:mt-16" delay={60}>
          <div className="card-interactive overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft-lg">
            <div className="flex items-center gap-3 border-b border-zinc-200/80 bg-zinc-50/90 px-5 py-3 md:px-6">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              </span>
              <span className="font-mono text-[11px] text-fg-subtle">demo_bar.md</span>
              <img src="/monad-logo-mark.svg" alt="" className="ml-auto h-5 w-auto shrink-0 opacity-70" width={20} height={20} />
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-zinc-200/80">
                {progressGrid.map((col) => (
                  <div key={col.label} className="md:px-6 md:first:pl-0 md:last:pr-0 lg:px-8">
                    <p
                      className={`font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        col.mutedLabel ? "text-fg-subtle" : "text-monad"
                      }`}
                    >
                      {col.label}
                    </p>
                    <ul className="mt-4 space-y-2.5 font-sans text-sm leading-snug text-fg-secondary">
                      {col.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full bg-monad/40" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
