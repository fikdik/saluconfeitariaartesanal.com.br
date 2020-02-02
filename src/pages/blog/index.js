import React from "react"

import { graphql } from "gatsby"

import BlogPostListItem from "~/components/BlogPostListItem"
import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export default function BlogIndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog index" />
      <section className="flex-auto">
        <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
          <h1>Blog</h1>
        </div>
        <div className="container py-10">
          <div className="flex flex-wrap -m-2">
            {nodes.map(post => (
              <BlogPostListItem
                path={post.fields.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.metadata.datePublished}
                highlight={!!post.frontmatter.highlight}
                cover={post.frontmatter.cover}
                tags={post.frontmatter.tags}
                key={post.id}
              />
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
      sort: { order: DESC, fields: [frontmatter___metadata___datePublished] }
      filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          metadata {
            datePublished(formatString: "MMMM DD, YYYY")
          }
          highlight
          cover {
            childImageSharp {
              fluid(maxWidth: 600, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`
