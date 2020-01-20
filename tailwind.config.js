// See https://tailwindcss.com/docs/configuration for details
const pallete = require("./content/theme/pallete.json")

module.exports = {
  theme: {
    fontFamily: {
      sans: [
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
        '"Lobster Two"',
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
