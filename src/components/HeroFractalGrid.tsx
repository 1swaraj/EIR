import { type CSSProperties, type ReactNode, useLayoutEffect, useState } from "react";

export const HERO_STRIP_COLS = 4;
export const HERO_STRIP_ROWS_MIN = 11;

function cellColor(c: number, r: number, cols: number, rows: number, side: "left" | "right"): string {
  const x = side === "left" ? c / Math.max(1, cols - 1) : (cols - 1 - c) / Math.max(1, cols - 1);
  const y = r / Math.max(1, rows - 1);
  const hue = 225 + x * 38 + (1 - y) * 52;
  const sat = 74 - x * 10 + y * 4;
  const light = 94 - y * 13 - x * 4;
  const chroma = 0.82 + x * 0.08;
  return `hsl(${hue}deg ${sat}% ${light}% / ${chroma})`;
}

/** Richer violet toward brand monad — pairs with base `cellColor` for hover. */
function cellColorHover(c: number, r: number, cols: number, rows: number, side: "left" | "right"): string {
  const x = side === "left" ? c / Math.max(1, cols - 1) : (cols - 1 - c) / Math.max(1, cols - 1);
  const y = r / Math.max(1, rows - 1);
  const hue = 252 + x * 28 + (1 - y) * 24;
  const sat = 84 - x * 8 + y * 3;
  const light = 86 - y * 11 - x * 3;
  const chroma = 0.94 + x * 0.05;
  return `hsl(${hue}deg ${sat}% ${light}% / ${chroma})`;
}

function useHeroStripRowCount(): number {
  const [rows, setRows] = useState(HERO_STRIP_ROWS_MIN);

  useLayoutEffect(() => {
    const root = document.getElementById("top");
    if (!root) return;

    const update = () => {
      const cellStr = getComputedStyle(root).getPropertyValue("--hero-cell").trim();
      const cell = parseFloat(cellStr) || 52;
      const h = root.clientHeight;
      const needed = Math.ceil(h / cell);
      setRows(Math.max(HERO_STRIP_ROWS_MIN, needed));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return rows;
}

function FractalStrip({ side, rowCount }: { side: "left" | "right"; rowCount: number }) {
  const cells: ReactNode[] = [];
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < HERO_STRIP_COLS; c++) {
      const base = cellColor(c, r, HERO_STRIP_COLS, rowCount, side);
      const hover = cellColorHover(c, r, HERO_STRIP_COLS, rowCount, side);
      cells.push(
        <div
          key={`${side}-${r}-${c}`}
          data-hero-cell
          data-hero-side={side}
          data-row={r}
          data-col={c}
          className="hero-fractal-cell relative z-0 min-h-0 min-w-0 cursor-default ring-1 ring-black/[0.06] transition-[background-color,transform,box-shadow] duration-[380ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform hover:z-[2] hover:scale-[1.06] hover:[background-color:var(--hero-fractal-bg-hover)] hover:shadow-[0_8px_24px_-6px_rgba(99,86,244,0.35)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none"
          style={
            {
              ["--hero-fractal-bg" as string]: base,
              ["--hero-fractal-bg-hover" as string]: hover,
              backgroundColor: "var(--hero-fractal-bg)",
            } as CSSProperties
          }
        />
      );
    }
  }

  const fade =
    side === "left"
      ? "linear-gradient(to right, black 0%, black 55%, transparent 100%)"
      : "linear-gradient(to left, black 0%, black 55%, transparent 100%)";

  const cellVar = "var(--hero-cell, 52px)";
  const stripW = `calc(4 * ${cellVar})`;

  return (
    <div
      className={`pointer-events-none absolute top-0 bottom-0 z-[1] overflow-hidden ${side === "left" ? "left-0" : "right-0"}`}
      style={{
        maskImage: fade,
        WebkitMaskImage: fade,
        width: stripW,
      }}
      aria-hidden
    >
      <div
        className="pointer-events-auto grid shrink-0 bg-white"
        style={{
          width: stripW,
          minHeight: "100%",
          gridTemplateColumns: `repeat(${HERO_STRIP_COLS}, ${cellVar})`,
          gridTemplateRows: `repeat(${rowCount}, ${cellVar})`,
        }}
      >
        {cells}
      </div>
    </div>
  );
}

/** Phased color squares left + right - fills hero height; row count tracks `#top` size. */
export function HeroFractalSideDecor() {
  const rowCount = useHeroStripRowCount();
  return (
    <>
      <FractalStrip side="left" rowCount={rowCount} />
      <FractalStrip side="right" rowCount={rowCount} />
    </>
  );
}
