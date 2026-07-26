import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563eb",
          sky: "#0284c7",
          navy: "#1e3a8a",
          amber: "#d97706",
          emerald: "#059669",
        },
        dark: {
          bg: "#0d111a",
          surface: "#141a29",
          card: "#192132",
          border: "#253046",
          text: "#f1f5f9",
          subtext: "#94a3b8"
        },
        light: {
          bg: "#f8fafc",
          surface: "#ffffff",
          card: "#ffffff",
          border: "#e2e8f0",
          text: "#0f172a",
          subtext: "#475569"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
