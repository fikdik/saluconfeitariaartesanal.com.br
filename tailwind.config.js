// See https://tailwindcss.com/docs/configuration for details
const googleFonts = require("./content/theme/google_fonts.json")
const pallete = require("./content/theme/pallete.json")

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        googleFonts.sans.family,
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
      ],
      serif: [
        googleFonts.serif.family,
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        ...pallete,
      },
    },
  },
  variants: {},
  plugins: [],
}
