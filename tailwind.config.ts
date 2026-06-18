import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1559B7",
          green: "#16A34A",
          ink: "#102033",
          soft: "#F5FAF7",
          gold: "#F5B841"
        }
      },
      boxShadow: {
        glow: "0 22px 80px rgba(21, 89, 183, 0.16)",
        soft: "0 18px 60px rgba(16, 32, 51, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
