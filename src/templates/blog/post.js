import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "~/layouts/Layout"

export const Template = ({ data }) => {
  const { title, html } = data
  return (
    <main className="flex-auto">
      <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  )
}

export default function PostBlog({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Template data={{ ...frontmatter, html }} />
    </Layout>
  )
}

PostBlog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query PostBlog($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
