import React from "react"

import PropTypes from "prop-types"

import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"
import SimplePageTemplate from "~/templates/SimplePageTemplate"

export default function HomePage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SimplePageTemplate data={{ ...frontmatter, html, SForm: SimpleForm }} />
    </Layout>
  )
}

HomePage.propTypes = {
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
        picture {
          childImageSharp {
          fluid(maxWidth: 600, quality: 75) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
