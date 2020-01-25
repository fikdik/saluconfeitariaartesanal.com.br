import React from "react"
import Helmet from "react-helmet"

import siteMetadata from "content/settings/siteMetadata.json"
import PropTypes from "prop-types"

function SEO({ description, lang, meta, title, image }) {
  title = title || siteMetadata.title
  const titleTemplate =
    title === siteMetadata.title
      ? `${title} : ${siteMetadata.slogan}`
      : `%s | ${siteMetadata.title}`
  const metaDescription = description || siteMetadata.description

  const url = siteMetadata.siteUrl

  const ogImage = `${url}${image || siteMetadata.ogImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
