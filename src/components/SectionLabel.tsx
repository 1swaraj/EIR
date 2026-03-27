type SectionLabelProps = {
  children: string;
  align?: "left" | "right";
};

export function SectionLabel({ children, align = "left" }: SectionLabelProps) {
  const line =
    align === "right" ? (
      <span className="h-px w-10 shrink-0 bg-gradient-to-l from-accent/50 to-transparent" aria-hidden />
    ) : (
      <span className="h-px w-10 shrink-0 bg-gradient-to-r from-accent/50 to-transparent" aria-hidden />
    );

  return (
    <p
      className={`mb-6 flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-muted ${
        align === "right" ? "justify-end text-right" : ""
      }`}
    >
      {align === "right" ? (
        <>
          <span>{children}</span>
          {line}
        </>
      ) : (
        <>
          {line}
          <span>{children}</span>
        </>
      )}
    </p>
  );
}
