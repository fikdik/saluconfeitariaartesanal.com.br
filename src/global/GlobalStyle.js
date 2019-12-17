import { createGlobalStyle } from "styled-components"
import reset from "./reset"

export default createGlobalStyle`
  ${reset}
  #___gatsby {
    overflow-x: hidden;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
  }
`
