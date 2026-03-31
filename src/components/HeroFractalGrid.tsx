import { type ReactNode } from "react";

/** Columns per side strip — tiles stay addressable for motion. */
export const HERO_STRIP_COLS = 4;
export const HERO_STRIP_ROWS = 11;

function cellColor(c: number, r: number, cols: number, rows: number, side: "left" | "right"): string {
  const x = side === "left" ? c / Math.max(1, cols - 1) : (cols - 1 - c) / Math.max(1, cols - 1);
  const y = r / Math.max(1, rows - 1);
  // Blue → indigo → violet only (no yellow/green band from the old 48° base).
  const hue = 225 + x * 38 + (1 - y) * 52;
  const sat = 74 - x * 10 + y * 4;
  const light = 94 - y * 13 - x * 4;
  const chroma = 0.82 + x * 0.08;
  return `hsl(${hue}deg ${sat}% ${light}% / ${chroma})`;
}

function FractalStrip({ side }: { side: "left" | "right" }) {
  const cells: ReactNode[] = [];
  for (let r = 0; r < HERO_STRIP_ROWS; r++) {
    for (let c = 0; c < HERO_STRIP_COLS; c++) {
      cells.push(
        <div
          key={`${side}-${r}-${c}`}
          data-hero-cell
          data-hero-side={side}
          data-row={r}
          data-col={c}
          className="min-h-[52px] rounded-[2px] ring-1 ring-black/[0.06] sm:min-h-[56px]"
          style={{
            backgroundColor: cellColor(c, r, HERO_STRIP_COLS, HERO_STRIP_ROWS, side),
          }}
        />
      );
    }
  }

  const fade =
    side === "left"
      ? "linear-gradient(to right, black 0%, black 55%, transparent 100%)"
      : "linear-gradient(to left, black 0%, black 55%, transparent 100%)";

  return (
    <div
      className={`pointer-events-none absolute top-0 z-[1] h-full w-[min(42vw,168px)] sm:w-[min(22vw,220px)] lg:w-[min(18vw,260px)] ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
      aria-hidden
    >
      <div
        className="grid h-full min-h-0 w-full bg-white"
        style={{
          gridTemplateColumns: `repeat(${HERO_STRIP_COLS}, minmax(0, 1fr))`,
          gridAutoRows: "1fr",
        }}
      >
        {cells}
      </div>
    </div>
  );
}

/**
 * Phased color squares on the left and right only — center stays calm for copy.
 * Cells: `[data-hero-cell][data-hero-side="left"|"right"]`.
 */
export function HeroFractalSideDecor() {
  return (
    <>
      <FractalStrip side="left" />
      <FractalStrip side="right" />
    </>
  );
}
