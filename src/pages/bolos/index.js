import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"
import SimplePageTemplate from "~/templates/SimplePageTemplate"

export default function BolosPage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SimplePageTemplate data={{ ...frontmatter, html, SForm: SimpleForm }} />
    </Layout>
  )
}

BolosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const bolosPageQuery = graphql`
{
  markdownRemark(
    fileAbsolutePath: { regex: "/.*/content/pages/bolos\\.md$/" }
  ) {
    html
    frontmatter {
      title
      galery {
        label
        picture {
          childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
