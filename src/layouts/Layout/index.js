import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export const Container = styled.div``
