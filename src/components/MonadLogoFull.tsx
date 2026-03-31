/**
 * Full Monad wordmark from Figma (mark + “MONAD” logotype).
 * Assets: `public/monad-logo-mark.svg`, `public/monad-logo-text.svg`
 */
type MonadLogoFullProps = {
  className?: string;
  /** Dark nav: Figma colors. Light sections: dark wordmark, purple mark unchanged. */
  variant?: "onDark" | "onLight";
  /** Overall height scale (matches Figma ~24px nav lockup for `md`). */
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: { wrap: "gap-1.5", mark: "h-5 w-auto", text: "h-[15px] w-auto max-w-[min(100px,42vw)]" },
  md: { wrap: "gap-2 sm:gap-2.5", mark: "h-6 w-auto sm:h-7", text: "h-[17px] w-auto max-w-[min(120px,55vw)] sm:h-[19px] sm:max-w-none" },
  lg: { wrap: "gap-2.5 sm:gap-3", mark: "h-7 w-auto sm:h-8", text: "h-[18px] w-auto max-w-[min(130px,72vw)] sm:h-[22px] sm:max-w-none" },
} as const;

export function MonadLogoFull({ className = "", variant = "onDark", size = "md" }: MonadLogoFullProps) {
  const s = sizeClasses[size];
  const textClass = variant === "onLight" ? "brightness-0 opacity-[0.88]" : "";

  return (
    <div
      className={`flex shrink-0 flex-nowrap items-center justify-center ${s.wrap} ${className}`}
      role="img"
      aria-label="Monad"
    >
      <img src="/monad-logo-mark.svg" alt="" className={`block shrink-0 object-contain ${s.mark}`} width={24} height={24} />
      <img
        src="/monad-logo-text.svg"
        alt=""
        className={`block shrink-0 object-contain object-left ${s.text} ${textClass}`}
        width={96}
        height={20}
      />
    </div>
  );
}
