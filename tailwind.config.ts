import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4CC9F0",
          foreground: "#0A0E17",
        },
        secondary: {
          DEFAULT: "#141B2D",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#39FF14",
          foreground: "#0A0E17",
        },
        muted: {
          DEFAULT: "#1F2937",
          foreground: "#9CA3AF",
        },
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "matrix-rain": "matrix-rain 10s linear infinite",
      },
      fontFamily: {
        mono: ["Courier Prime", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
