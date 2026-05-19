import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#121212",
        surface2: "#1A1A1A",
        line: "#2D2D2D",
        ink: "#FFFFFF",
        muted: "#A3A3A3",
        brand: {
          DEFAULT: "#FF9500",
          50: "#FFF3E0",
          400: "#FFB14D",
          500: "#FF9500",
          600: "#E67E00",
          700: "#B86500",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { screen: "1440px" },
      boxShadow: {
        glow: "0 0 24px rgba(255,149,0,0.35)",
        "glow-lg": "0 0 48px rgba(255,149,0,0.45)",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        flicker: {
          "0%,18%,22%,25%,53%,57%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.5" },
        },
        draw: { to: { strokeDashoffset: "0" } },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        sweep: "sweep 4s linear infinite",
        flicker: "flicker 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
