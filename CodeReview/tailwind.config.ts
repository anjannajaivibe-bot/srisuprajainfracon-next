import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{json,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        gold: "hsl(var(--gold))",
        navy: "hsl(var(--navy))",
        teal: "hsl(var(--teal))",
        success: "hsl(var(--success))",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
    },
  },
  plugins: [typography],
};

export default config;