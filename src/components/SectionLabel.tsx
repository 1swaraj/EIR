type SectionLabelProps = {
  children: string;
  align?: "left" | "right";
};

export function SectionLabel({ children, align = "left" }: SectionLabelProps) {
  const line =
    align === "right" ? (
      <span className="h-px w-10 shrink-0 bg-gradient-to-l from-monad/40 to-transparent" aria-hidden />
    ) : (
      <span className="h-px w-10 shrink-0 bg-gradient-to-r from-monad/40 to-transparent" aria-hidden />
    );

  return (
    <p
      className={`mb-6 flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-subtle ${
        align === "right" ? "justify-end text-right" : ""
      }`}
    >
      {align === "right" ? (
        <>
          <span>{children}</span>
          {line}
          <span
            className="relative flex h-1.5 w-1.5 shrink-0 rounded-full bg-monad/60 shadow-[0_0_12px_rgba(131,110,249,0.45)] motion-safe:animate-pulse-soft motion-reduce:animate-none"
            aria-hidden
          />
        </>
      ) : (
        <>
          <span
            className="relative flex h-1.5 w-1.5 shrink-0 rounded-full bg-monad/60 shadow-[0_0_12px_rgba(131,110,249,0.45)] motion-safe:animate-pulse-soft motion-reduce:animate-none"
            aria-hidden
          />
          {line}
          <span>{children}</span>
        </>
      )}
    </p>
  );
}
