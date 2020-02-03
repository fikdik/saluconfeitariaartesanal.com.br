import React from "react"

import info from "content/general/info.json"
import siteMetadata, { siteUrl } from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Content, { HTMLContent } from "~/components/Content"
import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export const Template = ({ title, content, componentContent }) => {
  const PostContent = componentContent || Content

  return (
    <main className="flex-auto bg-white">
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
  const { frontmatter, html, rawMarkdownBody, fields } = data.markdownRemark
  const { slug } = fields
  const { author, title, description, cover, tags, metadata } = frontmatter
  const ogImage = cover ? cover.childImageSharp.fluid.src : null

  const structuredDataArticle = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: siteUrl + slug,
    headline: metadata.headline || description.slice(0, 110),
    image: metadata.cover
      ? siteUrl + metadata.cover.childImageSharp.fluid.src
      : siteUrl + ogImage,
    datePublished: metadata.datePublished,
    dateModified: metadata.dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    articleBody: rawMarkdownBody,
    publisher: {
      "@type": "Organization",
      name: info.localID.legalName,
      logo: {
        "@type": "ImageObject",
        url: siteMetadata.logo,
      },
    },
    description: description,
    url: siteUrl + slug,
  })

  const meta = [
    {
      property: "article:published_time",
      content: metadata.datePublished,
    },
    {
      property: "article:modified_time",
      content: metadata.dateModified,
    },
    // {
    //   property: "article:section",
    //   content: metadata.section,
    // },
    {
      property: "article:tag",
      content: tags.join(", "),
    },
  ]

  return (
    <Layout>
      <SEO
        title={title}
        type="article"
        description={metadata.description}
        image={ogImage}
        structuredData={structuredDataArticle}
        meta={meta}
      />

      <Template title={title} content={html} componentContent={HTMLContent} />
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
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      html
      fields {
        slug
      }
      frontmatter {
        author
        title
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        metadata {
          datePublished
          dateModified
          cover {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
