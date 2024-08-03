import type { Config } from "tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Corbel", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [],
} as Config;
