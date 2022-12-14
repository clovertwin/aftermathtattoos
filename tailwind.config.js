/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hands: "url('/images/hands.jpg')",
      },
      fontFamily: {
        header: ["Almendra Display", "cursive"],
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
