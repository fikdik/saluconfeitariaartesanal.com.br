import React from "react"

import Layout from "~/layouts/Layout"

export default function pages({ children }) {
  return (
    <Layout>
      <div className="Container">
        <h1>Pagina não encontrada</h1>
      </div>
    </Layout>
  )
}

// export const Container = styled.div`
//   ${props => props.theme.container}
// `
