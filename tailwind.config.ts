import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-black": "#1A1A1D",
        "custom-gray": "#4E4E50",
        "custom-dark-red": "#6F2232",
        "custom-pink": "#950740",
        "custom-chilli-red": "#C3073F",
      },
    },
  },
  plugins: [],
};
export default config;
