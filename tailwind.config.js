/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
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
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "hero-breathe": "heroBreathe 14s ease-in-out infinite",
        "hero-shimmer": "heroShimmer 8s ease-in-out infinite",
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
      },
      boxShadow: {
        "hero-cta": "0 0 0 1px rgba(255,255,255,0.12) inset, 0 2px 8px rgba(0,0,0,0.4), 0 0 48px -8px rgba(232,220,200,0.25)",
        "hero-cta-hover": "0 0 0 1px rgba(255,255,255,0.2) inset, 0 4px 24px rgba(0,0,0,0.35), 0 0 64px -4px rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
