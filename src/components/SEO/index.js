import React from "react"
import Helmet from "react-helmet"

import siteMetadata from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

function SEO({
  title,
  titleTemplate,
  description,
  lang,
  typeName,
  slug,
  image,
  meta,
  data,
}) {
  const { siteUrl } = siteMetadata
  const { seo } = data.markdownRemark.frontmatter
  if (seo.image) {
    image = seo.image
  }
  if (seo.description) {
    description = seo.description
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        { name: `description`, content: description },

        // Open Graph
        { property: `og:title`, content: title },
        { property: `og:type`, content: typeName },
        { property: `og:url`, content: siteUrl + slug },
        { property: `og:image`, content: siteUrl + image },
        { property: `og:description`, content: description },
        {
          property: `og:site_name`,
          content: `${siteMetadata.title} : ${siteMetadata.slogan}`,
        },
        // { property: `fb:admins`, content: "Facebook numberic ID",},
        // Article structure
        // { property: `article:published_time`, content: "2013-09-17T05:59:00+01:00",},
        // { property: `article:modified_time`, content: "2013-09-17T05:59:00+01:00",},
        // { property: `article:section`, content: "Article Section",},
        // { property: `article:tag`, content: "Article Tag",},
        // Product structure
        // { property: `og:price:amount`, content: "15.00",},
        // { property: `og:price:currency`, content: "USD",},

        // Twitter Card
        { name: `twitter:card`, content: `summary_large_image` },
        // { name: `twitter:site`, content: `@publisher_handle` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        // { name: `twitter:creator`, content: author },
        { name: `twitter:image:src`, content: siteUrl + image },
        // Product structure
        // { name: `twitter:data1`, content: "$3" },
        // { name: `twitter:label1`, content: "Price" },
        // { name: `twitter:data2`, content: "Black" },
        // { name: `twitter:label2`, content: "Color" },
      ]
        .concat(meta)
        .concat(seo.names)
        .concat(seo.properties)}
    />
  )
}

SEO.defaultProps = {
  title: siteMetadata.title,
  titleTemplate: `%s | ${siteMetadata.title}`,
  description: siteMetadata.description || "",
  lang: siteMetadata.lang || "en",
  slug: "",
  typeName: "website",
  image: siteMetadata.ogImage || siteMetadata.logo,
  meta: [],
  data: {
    markdownRemark: {
      frontmatter: {
        seo: {
          names: [],
          properties: [],
        },
      },
    },
  },
}

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  typeName: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

export const componentQuery = graphql`
  query seoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          image {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          names {
            name
            content
          }
          properties {
            property
            content
          }
        }
      }
    }
  }
`
