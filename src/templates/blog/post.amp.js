import React from "react"

import info from "content/general/info.json"
import siteMetadata, { siteUrl } from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Content, { HTMLContent } from "~/components/Content"
import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export const TemplateAMP = ({ title, content, componentContent }) => {
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

export default function PostBlogAMP({ data }) {
  const { frontmatter, html, excerpt, fields } = data.markdownRemark
  const { slug } = fields
  const { author, title, description, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null

  const structuredDataArticle = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://google.com/article",
    },
    headline: metadata.headline || description.slice(0, 110),
    image: metadata.cover ? siteUrl + metadata.cover : siteUrl + ogImage,
    datePublished: metadata.datePublished,
    dateModified: metadata.dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    articleBody: excerpt,
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

  return (
    <Layout>
      <SEO
        amp={true}
        title={title}
        type="article"
        description={metadata.description}
        image={ogImage}
        structuredData={structuredDataArticle}
      />

      <TemplateAMP
        title={title}
        content={html}
        componentContent={HTMLContent}
      />
    </Layout>
  )
}

PostBlogAMP.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query PostBlogAMP($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        author
        title
        description
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
          headline
        }
      }
    }
  }
`
