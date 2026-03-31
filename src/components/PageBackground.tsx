/** Light canvas behind content — subtle grid + violet ambient (Figma-aligned). */
export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-main-gradient" />
      <div className="bg-grid-light absolute inset-0 opacity-[0.5]" />
      <div className="absolute -left-[15%] top-[-20%] h-[min(70vh,560px)] w-[min(70vw,560px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(131,110,249,0.12),transparent_62%)] motion-safe:animate-ambient-a motion-reduce:animate-none" />
      <div className="absolute bottom-[-20%] right-[-15%] h-[min(60vh,480px)] w-[min(65vw,520px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(110,84,255,0.08),transparent_58%)] blur-3xl motion-safe:animate-ambient-b motion-reduce:animate-none" />
    </div>
  );
}
