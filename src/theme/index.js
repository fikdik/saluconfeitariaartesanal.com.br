const breakpoints = ["414px", "568px", "768px", "1040px"]
const colors = {
  white: "#fff",
  black: "#111",
  primary: ["red", "yellow"],
  secondary: "orange",
}

export default {
  breakpoints,
  colors,
  size: {
    inner: "1024px",
  },
  container: {
    maxWidth: "1024px",
    width: "90%",
    margin: "0 auto",
  },
  textStyles: {
    heading1: {
      fontSize: ["32px", "42px", "52px"],
      color: "#000",
      fontWeight: 800,
    },
    textStyle1: {
      fontSize: "16px",
      color: "#000",
      fontWeight: 400,
      lineHeight: "1.4",
    },
  },
}
