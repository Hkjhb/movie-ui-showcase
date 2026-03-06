import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        "bg-card": "#161616",
        "bg-card-hover": "#1e1e1e",
        surface: "#1a1a1a",
        border: "#2a2a2a",
        gold: "#e0b84f",
        "gold-dim": "#a07f30",
        red: "#e03c3c",
        text: "#f0f0f0",
        "text-muted": "#888888",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.45s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
