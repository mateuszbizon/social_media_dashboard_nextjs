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
        "secondary-background-color": "hsl(0, 0%, 100%)",
        "main-color": "hsl(230, 17%, 14%)",
        "secondary-color": "hsl(228, 12%, 44%)",
        "toggle-theme-btn": "hsl(230, 22%, 74%)",
        "card-background-color": "hsl(227, 47%, 96%)",
        "twitter-color": "hsl(203, 89%, 53%)",
        "youtube-color": "hsl(348, 97%, 39%)",
        "facebook-color": "hsl(208, 92%, 53%)",
        "instagram-color": "hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
      }
    },
  },
  plugins: [],
};
export default config;
