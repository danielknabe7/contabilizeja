import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        ocean: "#0369a1",
        mint: "#14f1c7",
        limeglass: "#d9fff7",
        graphite: "#101828",
        cloud: "#f7fbff",
      },
      boxShadow: {
        glow: "0 30px 90px rgba(20, 241, 199, .26)",
        premium: "0 28px 80px rgba(2, 8, 23, .18)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(20,241,199,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(20,241,199,.09) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
