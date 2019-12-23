import React from "react"

import styled from "styled-components"

import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <section id="main">{children}</section>
      <Footer />
    </Container>
  )
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  #main {
    flex: 1;
  }
`
