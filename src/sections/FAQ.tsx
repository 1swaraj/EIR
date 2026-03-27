import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const faqs: { q: string; a: string }[] = [
  {
    q: "Who is this for?",
    a: "Undergrad builders in India shipping product—CS or not—who want a ruthless summer, not a line item.",
  },
  {
    q: "Remote or in person?",
    a: "Hybrid where it helps; demos are synchronous. Details go out to admitted builders.",
  },
  {
    q: "How much is the stipend?",
    a: "Enough to remove excuses—not enough to be the point. Unlocks after the build gate.",
  },
  {
    q: "Do I need prior web3 experience?",
    a: "You need taste and execution. Deep chain history optional; learning velocity isn’t.",
  },
  {
    q: "What if I miss a demo?",
    a: "Communicate early. Ghosting the room is how you exit—by design.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-700/50 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            Short answers.
          </h2>
        </Reveal>

        <dl className="mt-14 space-y-4">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <div className="group flex gap-5 rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 transition hover:border-ink-700/80 hover:bg-ink-900/35 md:gap-6 md:p-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-700/80 bg-ink-950 font-display text-sm font-bold text-accent-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <dt className="font-display text-base font-semibold text-ink-100">{item.q}</dt>
                  <dd className="mt-2 font-sans text-sm leading-relaxed text-ink-400">{item.a}</dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
