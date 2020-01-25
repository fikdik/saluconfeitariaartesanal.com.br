import React from "react"

import { Link, graphql } from "gatsby"

import BlogPostListItem from "~/components/BlogPostListItem"
import SEO from "~/components/SEO"

import Layout from "../../layouts/Layout"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`

    return (
      <Layout>
        <SEO title={`${tagHeader}`} />
        <section className="flex-auto">
          <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
            <h1>{tagHeader}</h1>
          </div>
          <div className="container py-10">
            <div className="flex flex-wrap -m-2">
              {posts.map(post => (
                <BlogPostListItem post={post.node} key={post.node.id} />
              ))}
            </div>
            <div className="mt-10">
              <Link to="/tags/">Browse all tags</Link>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`
