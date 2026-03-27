/** Fixed decorative layers — sit behind content, never capture pointer events. */
export function PageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-grid-fine absolute inset-0 opacity-[0.45]" />
      <div className="bg-dot-soft absolute inset-0" />
      <div className="absolute -left-1/4 top-0 h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,220,200,0.06),transparent_65%)]" />
      <div className="absolute bottom-0 right-0 h-[55vh] w-[55vw] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(68,64,60,0.35),transparent_60%)] blur-3xl" />
    </div>
  );
}
