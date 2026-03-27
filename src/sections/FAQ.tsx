import { Reveal } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a team?",
    a: "No. Solo builders are welcome. If you have a co-builder, great-but we select individuals, not pitch teams.",
  },
  {
    q: "Do I need revenue or users?",
    a: "No. We're looking for evidence of building and shipping behavior, not traction metrics. A scrappy prototype counts.",
  },
  {
    q: "Do I need to already be building on Monad?",
    a: "No. You can choose a Monad-aligned problem statement or pitch your own idea for approval. We care about builder quality, not prior chain experience.",
  },
  {
    q: "Can I apply if I only have a rough prototype?",
    a: "Yes-that's exactly the point. The build gate exists so you can prove you can ship, not that you already have a finished product.",
  },
  {
    q: "What if I'm going through campus placements?",
    a: "That's your call. This program is designed for people who are questioning the default path. We won't tell you to drop placements, but we will expect weekly demos regardless.",
  },
  {
    q: "What happens if I miss demo weeks?",
    a: "Two missed demos in any rolling four-week window and you're terminated from the program. The weekly demo is the contract.",
  },
  {
    q: "Is this remote or in-person?",
    a: "Primarily remote with potential in-person touchpoints. Details shared on acceptance.",
  },
  {
    q: "What kind of ideas are a fit?",
    a: "Anything from DeFi infra and consumer apps to developer tools and data systems-as long as it's buildable on or adjacent to Monad and you can ship a prototype fast.",
  },
  {
    q: "Is this only for crypto-native builders?",
    a: "No. If you're a cracked builder who's excited by hard problems and fast iteration, that matters more than your crypto background.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-b border-ink-800/80 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-700/50 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-50 md:text-4xl lg:text-5xl">
            Questions you&apos;d actually ask.
          </h2>
        </Reveal>

        <dl className="mt-14 space-y-4">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 35}>
              <div className="card-interactive group flex gap-5 rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 hover:border-ink-700/80 hover:bg-ink-900/35 md:gap-6 md:p-7">
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
