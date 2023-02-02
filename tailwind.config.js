/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Anton", "sans-serif"],
        mono: ["DM Mono", "sans-serif"],
      },
      fontSize: {
        small: "18px",
        base: "20px",
        large: "24px",
        huge: "40px",
      },
      colors: {
        background: "#F8FAF9",
        offwhite: "#F1EFE6",
        beige: "#FAF9F8",
        black: "#262525",
        brown: "#423B3C",
        orange: "#EB9F59",
      },
      dropShadow: {
        dark: "4px 4px 1px #262525",
        light: "0 4px 4px #262525",
      },
    },
  },
  plugins: [],
};
