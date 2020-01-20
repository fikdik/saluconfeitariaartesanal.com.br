import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import CleanLayout from "~/layouts/CleanLayout"
import LinksPageTemplate from "~/templates/LinksPageTemplate"

export default function EspeciaisPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <CleanLayout>
      <LinksPageTemplate data={{ ...frontmatter }} />
    </CleanLayout>
  )
}

EspeciaisPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const bolosPageQuery = graphql`
{
  markdownRemark(
    fileAbsolutePath: { regex: "/.*/content/pages/links\\.md$/" }
  ) {
    frontmatter {
      links {
        label
        url
      }
    }
  }
}
`
