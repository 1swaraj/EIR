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
    <section className="border-b border-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl">
            Short answers.
          </h2>
        </Reveal>

        <dl className="mt-14 space-y-0 divide-y divide-ink-800/80 border-t border-ink-800/80">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <div className="py-8">
                <dt className="font-display text-base font-semibold text-ink-100">{item.q}</dt>
                <dd className="mt-3 font-sans text-sm leading-relaxed text-ink-400">{item.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
