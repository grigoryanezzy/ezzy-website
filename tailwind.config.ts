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
        primary: "#5EC7D2",
        secondary: "#243E96",
        accent: "#DFEDF1",
        "primary-dark": "#4ab3be",
        "secondary-dark": "#1a2e6e",
      },
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
