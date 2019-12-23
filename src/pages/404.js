import React from "react"

import styled from "styled-components"

import Layout from "~/layouts/Layout"

export default function pages({ children }) {
  return (
    <Layout>
      <Container>
        <h1>Pagina não encontrada</h1>
      </Container>
    </Layout>
  )
}

export const Container = styled.div`
  ${props => props.theme.container}
`
