import { Reveal } from "../components/Reveal";
import { APPLY_URL } from "../config";
import { IconArrowUpRight, IconCorner, IconSocialDiscord, IconSocialInstagram, IconSocialX, IconSocialYouTube } from "../components/icons";
import { MonadLogoFull } from "../components/MonadLogoFull";

const SOCIAL = [
  { href: "https://x.com/monad_xyz", label: "Monad on X", Icon: IconSocialX },
  { href: "https://discord.gg/monad", label: "Monad on Discord", Icon: IconSocialDiscord },
  { href: "https://www.youtube.com/@monad_xyz", label: "Monad on YouTube", Icon: IconSocialYouTube },
  { href: "https://www.instagram.com/monad_xyz/", label: "Monad on Instagram", Icon: IconSocialInstagram },
];

export function FinalCTA() {
  return (
    <section id="apply" className="scroll-mt-28 bg-main-gradient py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="card-interactive relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white px-8 py-16 shadow-soft-lg md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(131,110,249,0.08),transparent_55%)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-monad/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-monad/20 to-transparent" />
          <IconCorner className="pointer-events-none absolute left-5 top-5 h-9 w-9 text-monad/25 md:left-8 md:top-8" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <Reveal>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-fg-primary md:text-[2.35rem]">
                  If you need convincing, you&apos;re not ready.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-fg-secondary">
                  Applications are reviewed on a rolling basis. Bring receipts—repos, demos, users if you have them. We move fast and
                  tell you straight.
                </p>
              </Reveal>
            </div>
            <Reveal className="min-w-0 shrink-0" delay={120}>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={APPLY_URL}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-monad-cta to-monad-cta px-10 py-4 font-mono text-sm font-medium uppercase tracking-wide text-white shadow-cta-primary transition-[transform,box-shadow] hover:shadow-cta-primary-hover active:scale-[0.98] motion-safe:hover:-translate-y-px motion-reduce:hover:translate-y-0 lg:w-auto"
                >
                  Apply now
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-8 border-t border-zinc-200/80 pt-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <MonadLogoFull variant="onLight" size="md" className="max-w-[200px]" />
            <p className="font-sans text-xs text-fg-tertiary">© {new Date().getFullYear()} Monad Foundation</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {SOCIAL.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-primary transition-colors hover:bg-zinc-100 hover:text-monad"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="font-sans text-xs text-fg-tertiary md:max-w-xs md:text-right">
            Built for builders who ship · Prototype-first, no pitch decks
          </p>
        </footer>
      </div>
    </section>
  );
}
