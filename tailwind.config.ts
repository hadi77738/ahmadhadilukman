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
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          blue: "#2563eb",
          indigo: "#4f46e5",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
        dark: {
          bg: "#080c14",
          surface: "#0e1524",
          card: "#131b2e",
          cardHover: "#18223a",
          border: "#1e293b",
          borderHover: "#334155",
          text: "#f8fafc",
          subtext: "#94a3b8"
        },
        light: {
          bg: "#f8fafc",
          surface: "#ffffff",
          card: "#ffffff",
          cardHover: "#f1f5f9",
          border: "#e2e8f0",
          borderHover: "#cbd5e1",
          text: "#0f172a",
          subtext: "#475569"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)",
        "mesh-light": "radial-gradient(at 0% 0%, rgba(219, 234, 254, 0.6) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(224, 231, 255, 0.4) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
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
