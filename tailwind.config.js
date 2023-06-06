import { mauve, violet } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "36rem",
      md: "48rem",
      lg: "62rem",
      xl: "75rem",
    },
    colors: {
      white: "#FFFF",
      blue: {
        100: "#1fb6ff",
        200: "#388DC7",
        300: "rgba(56, 141, 199, 0.5)",
      },
      purple: {
        100: "#712782",
        200: "rgba(113, 38, 130, 0.5)",
        300: "#3D1A4A",
      },
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: {
        100: "#ffff00",
        200: "#ffc82c",
      },

      gray: {
        50: "#F2F2F2",
        100: "#DDDDDD",
        200: "#D9D9D9",
        300: "#D3DCE6",
        400: "rgba(255, 255, 255, 0.5)",
        500: "#8492a6",
        600: "#868585",
        700: "#273444",
        800: "#333333",
      },

      shadow: {
        100: "0px 0px 4px rgba(134, 133, 133, 0.5)",
      },
    },
    fontFamily: {
      sans: ["Varela Round", "sans-serif"],
      serif: ["Varela Round", "serif"],
    },
    fontSize: {
      10: ".625rem",
      12: ".75rem",
      14: ".875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      30: "1.875rem",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        ...mauve,
        ...violet,
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },

  plugins: [],
};
