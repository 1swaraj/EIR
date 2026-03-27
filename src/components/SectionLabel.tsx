type SectionLabelProps = {
  children: string;
  align?: "left" | "right";
};

export function SectionLabel({ children, align = "left" }: SectionLabelProps) {
  return (
    <p
      className={`mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-muted ${
        align === "right" ? "text-right" : ""
      }`}
    >
      {children}
    </p>
  );
}
