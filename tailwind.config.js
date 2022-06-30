/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "pages/**/*.{vue,js,ts}",
    "layouts/**/*.{vue,js,ts}",
  ],
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1536px"
    },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      mosttop: "9999"
    },
    extend: {},
  },
  plugins: [],
}
