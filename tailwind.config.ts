// tailwind.config.js
import type {Config} from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#75D164",
        foreground: "#7F94F0",
        info: "#E1FDD5",
        dark: "#2C2C2C",
        light: "#F7F6FE",
        warning: "#F2A80A",
        success: "#1DCE64",
        danger: "#F50057",
      },
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borders: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
