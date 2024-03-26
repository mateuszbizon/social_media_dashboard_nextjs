import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "dark-main-background-color": "hsl(232, 19%, 15%)",
        "dark-secondary-background-color": "hsl(230, 17%, 14%)",
        "dark-main-color": "hsl(0, 0%, 100%)",
        "dark-secondary-color": "hsl(228, 34%, 66%)",
        "dark-card-background-color": "hsl(228, 28%, 20%)",
      },
      backgroundImage: {
        "instagram-color": "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "dark-toggle-theme-btn": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      }
    },
  },
  plugins: [],
};
export default config;
