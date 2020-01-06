import React from "react"

import PropTypes from "prop-types"

import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"
import CoffeeBreakPageTemplate from "~/templates/CoffeeBreakPageTemplate"

export default function CoffeBreakPage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <CoffeeBreakPageTemplate
        data={{ ...frontmatter, html, SForm: SimpleForm }}
      />
    </Layout>
  )
}

CoffeBreakPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const bolosPageQuery = graphql`
{
  markdownRemark(
    fileAbsolutePath: { regex: "/.*/content/pages/coffee-break\\.md$/" }
  ) {
    frontmatter {
      title
      texts {
        paragraph
      }
      cards {
        label
        description
        icon
        linkText
        linkUrl
      }
    }
    html
  }
}
`
