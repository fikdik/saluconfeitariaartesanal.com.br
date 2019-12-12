import React from "react"
import GlobalStyle from "./global/GlobalStyle"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

// import StoreProvider from './store'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
