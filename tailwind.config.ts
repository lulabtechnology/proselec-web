import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        ring: "hsl(var(--ring))",
        brand: {
          50: "hsl(var(--brand-50))",
          100: "hsl(var(--brand-100))",
          200: "hsl(var(--brand-200))",
          300: "hsl(var(--brand-300))",
          400: "hsl(var(--brand-400))",
          500: "hsl(var(--brand-500))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
          800: "hsl(var(--brand-800))",
          900: "hsl(var(--brand-900))"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        glow: "0 0 0 1px rgba(20, 184, 166, .25), 0 20px 60px rgba(20, 184, 166, .15)"
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } }
      },
      animation: { floaty: "floaty 6s ease-in-out infinite" }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
