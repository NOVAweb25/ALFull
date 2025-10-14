/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121921",
        gold: "#FDB81C",
        redmain: "#C8202F",
        blue1: "#1E3A5F",
        yellow1: "#FFD166",
        wine: "#8B1E3F",
      },
    },
  },
  plugins: [],
};
