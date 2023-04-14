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
        "blue-100": "#1fb6ff",
        "blue-300": "#388DC7",
      },
      purple: {
        "purple-50": "rgba(113, 38, 130, 0.5)",
        "purple-100": "#712782",
        "purple-200": "#3D1A4A",
      },
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",

      gray: {
        "gray-50": "#DDDDDD",
        "gray-100": "#d3dce6",
        "gray-200": "rgba(255, 255, 255, 0.5)",
        "gray-300": "#8492a6",
        "gray-400": "#868585",
        "gray-500": "#273444",
      },
    },
    fontFamily: {
      sans: ["Varela Round", "sans-serif"],
      serif: ["Varela Round", "serif"],
    },
    fontSize: {
      "10/px": ".625rem",
      "12/px": ".75rem",
      "14/px": ".875rem",
      "16/px": "1rem",
      "18/px": "1.125rem",
      "20/px": "1.25rem",
      "30/px": "1.875rem",
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
    minHeight: {
      "69/vh": "69vh",
    },
  },
  plugins: [],
};
