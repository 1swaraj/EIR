/** Fixed decorative layers - sit behind content, never capture pointer events. */
export function PageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="absolute inset-0 opacity-[0.38] motion-safe:animate-grid-drift motion-reduce:animate-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(41 37 36 / 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(41 37 36 / 0.45) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="bg-grid-fine absolute inset-0 opacity-[0.28]" />
      <div className="bg-dot-soft absolute inset-0" />
      {/* Slow-moving ambient glows */}
      <div className="absolute -left-[20%] top-[-10%] h-[min(85vh,720px)] w-[min(85vw,720px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,220,200,0.09),transparent_62%)] motion-safe:animate-ambient-a motion-reduce:animate-none" />
      <div className="absolute bottom-[-15%] right-[-25%] h-[min(70vh,640px)] w-[min(75vw,640px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(68,64,60,0.42),transparent_58%)] blur-3xl motion-safe:animate-ambient-b motion-reduce:animate-none" />
      <div className="absolute left-1/2 top-1/2 h-[min(90vmin,520px)] w-[min(90vmin,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,220,200,0.04),transparent_68%)] blur-2xl motion-safe:animate-ambient-c motion-reduce:animate-none" />
    </div>
  );
}
