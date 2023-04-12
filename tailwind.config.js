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
      blue: "#1fb6ff",
      purple: {
        "purple-100": "#712782",
        "purple-200": "#3D1A4A",
      },
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",

      gray: {
        "gray-100": "#d3dce6",
        "gray-200": "#8492a6",
        "gray-300": "#868585",
        "gray-400": "#273444",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
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
  },
  plugins: [],
};
