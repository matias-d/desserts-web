import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors : {
        primary : '#c73a0f',
        secondaryGreen : '#1ea475',
        primaryRose : {
          50 : '#fcf9f7',
          100 : '#f4edeb',
          300 : '#c9aea6',
          400 : '#ad8985',
          500 : '#87635a',
          900 : '#260f08'

        }
     }
    },
  },
  plugins: [],
};
export default config;
