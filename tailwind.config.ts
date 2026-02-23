import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rolex: {
          green: "#006039", // الأخضر الملكي
          gold: "#a37e2c", // الذهبي الفخم من شعارك
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
