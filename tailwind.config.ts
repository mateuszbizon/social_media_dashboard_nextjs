import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-background-color": "hsl(225, 100%, 98%)",
        "main-color": "hsl(230, 17%, 14%)",
        "secondary-color": "hsl(228, 12%, 44%)",
        "toggle-theme-btn": "hsl(230, 22%, 74%)",
      }
    },
  },
  plugins: [],
};
export default config;
