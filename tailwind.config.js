/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        //primary: "#003d7b",
        primary: "#ffc557",
        //primarydark: "#00264d",
        primarydark: "#ff964d",
        herobg: "#ffc557",
        secondary: "#003d7b",
      },
    },
    fontFamily: {
      "short-stack": ["Short Stack", "sans-serif"],
    },
  },
  plugins: [],
};
