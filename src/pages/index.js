import React from "react"

import PropTypes from "prop-types"

import Layout from "~/layouts/Layout"
import HomePageTemplate from "~/templates/HomePageTamplate"

export default function HomePage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate data={frontmatter} />
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

export const pageQuery = graphql`
{
  markdownRemark(
    fileAbsolutePath: { regex: "/.*/content/pages/index\\.md$/" }
  ) {
    frontmatter {
      flipcards {
        back {
          description
          link
          linkText
          title
        }
        front {
          title
          icon
          img {
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
}
`
