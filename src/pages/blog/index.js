import React from "react"

import { graphql } from "gatsby"

import BlogPostListItem from "~/components/BlogPostListItem"
import Layout from "~/layouts/Layout"

export default function BlogIndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <section className="flex-auto">
        <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
          <h1>Blog</h1>
        </div>
        <div className="container py-10">
          <div className="flex flex-wrap -m-2">
            {nodes.map(post => (
              <BlogPostListItem post={post} key={post.id} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
    ) {
      nodes {
        id
        frontmatter {
          featuredpost
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          date(formatString: "MMMM DD, YYYY")
          description
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`
