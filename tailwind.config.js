/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        /** Legacy warm stone scale — kept for gradual migration */
        ink: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        accent: {
          DEFAULT: "#e8dcc8",
          muted: "#a89f8f",
        },
        /** Figma-aligned UI */
        fg: {
          primary: "#0a0a0a",
          secondary: "#3f3f46",
          muted: "#71717a",
          subtle: "#a1a1aa",
          tertiary: "#a3a3a3",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#fafafa",
          nav: "#09090b",
          border: "#e4e4e7",
        },
        /** Monad brand — Figma variables */
        monad: {
          DEFAULT: "#836EF9",
          cta: "#6e54ff",
          deep: "#382bd1",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "hero-breathe": "heroBreathe 14s ease-in-out infinite",
        "hero-shimmer": "heroShimmer 8s ease-in-out infinite",
        "ambient-a": "ambientA 22s ease-in-out infinite",
        "ambient-b": "ambientB 28s ease-in-out infinite",
        "ambient-c": "ambientC 32s ease-in-out infinite",
        "grid-drift": "gridDrift 90s linear infinite",
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        "line-glow": "lineGlow 4s ease-in-out infinite",
        "hero-card-sheen": "heroCardSheen 10s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroBreathe: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1) translate(0, 0)" },
          "50%": { opacity: "0.55", transform: "scale(1.08) translate(2%, -2%)" },
        },
        heroShimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
        ambientA: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8%, -4%) scale(1.08)" },
          "66%": { transform: "translate(-4%, 6%) scale(0.96)" },
        },
        ambientB: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-10%, 8%) scale(1.12)" },
        },
        ambientC: {
          "0%, 100%": { opacity: "0.45", transform: "translate(0, 0)" },
          "50%": { opacity: "0.75", transform: "translate(6%, -10%)" },
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 56px" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        lineGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        heroCardSheen: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.09" },
        },
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        nav: "0 1px 2px 0 rgba(0,0,0,0.05)",
        "cta-primary":
          "0 1px 2px rgba(0,0,0,0.2), 0 0 0 1px rgba(79,71,235,0.9), inset 0 1px 0.5px rgba(255,255,255,0.25)",
        "cta-primary-hover": "0 4px 24px rgba(110,84,255,0.35), 0 0 0 1px rgba(110,84,255,0.5)",
        soft: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        "soft-lg": "0 24px 80px -32px rgba(15,23,42,0.12)",
      },
    },
  },
  plugins: [],
};
