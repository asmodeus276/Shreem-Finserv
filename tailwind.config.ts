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
        brand: {
          blue: "#0B309A",
          royal: "#0B309A",
          red: "#E30613",
          "red-hover": "#FF1A27",
          "red-dark": "#B8040E",
        },
        primary: {
          DEFAULT: "#0B309A",
          container: "#082475",
        },
        secondary: {
          DEFAULT: "#E30613",
          container: "#FF1A27",
        },
      },
    },
  },
  plugins: [],
};

export default config;
