import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      // pattern: /(bg)-(red|green|blue|yellow|purple|indigo|pink|gray|lime|amber|emerald|teal|cyan|fuchsia|rose|stone|zinc|neutral|slate)-\d+/,
      pattern: /(bg)-(blue|gray)-\d+/,
    }
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          primary: "#3359F7"
        },
        gray: {
          50: "#FAFAFC",
          200: "#E9E9E9"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;