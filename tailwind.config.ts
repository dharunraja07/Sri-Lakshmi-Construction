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
        olive: {
          DEFAULT: "#5C6B2E",
          hover: "#7A8F46",
          50: "#F6F8EE",
          100: "#EDF2DB",
          200: "#DCE5BA",
          300: "#C4D490",
          400: "#A6BE63",
          500: "#5C6B2E",
          600: "#4D5B24",
          700: "#3D481C",
          800: "#2F3816",
          900: "#222910",
        },
        warm: {
          bg: "#F5EFE0",
          card: "#FCFAF6",
          border: "#E5DEC9",
          borderStrong: "#D4CBB3",
          text: "#1F1F1F",
          muted: "#666154",
        },
        darkSurface: {
          bg: "#131209",
          card: "#1F1F1F",
          cardElevated: "#26251E",
          border: "#302D22",
          borderStrong: "#454133",
          text: "#F5EFE0",
          muted: "#A6A091",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        hover: "0 10px 25px -3px rgba(92, 107, 46, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      },
      borderRadius: {
        editorial: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
