import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Content, { HTMLContent } from "~/components/Content"
import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export const Template = ({ title, content, componentContent }) => {
  const PostContent = componentContent || Content

  return (
    <main className="flex-auto">
      <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="container py-8">
        <PostContent
          className="blog-post-md responsive-columns text-justify"
          content={content}
        />
      </div>
    </main>
  )
}

export default function PostBlog({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Template
        title={frontmatter.title}
        content={html}
        componentContent={HTMLContent}
      />
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
