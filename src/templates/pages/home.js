import React from "react"

import info from "content/general/info.json"
import social from "content/general/social.json"
import siteMetadata from "content/settings/siteMetadata.json"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import FlipCard from "~/components/FlipCard"
import SEO from "~/components/SEO"
import Layout from "~/layouts/Layout"

export const Template = ({ flipcards }) => {
  return (
    <main className="flex-auto">
      <div className="py-6 container flex flex-wrap">
        {flipcards.map((flipcard, index) => (
          <FlipCard data={flipcard} key={index} />
        ))}
      </div>
    </main>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}

export default function HomePage({ data }) {
  const { frontmatter } = data.markdownRemark
  const { flipcards, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null

  const structuredDataOrganization = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    legalName: info.localID.legalName,
    url: siteMetadata.siteUrl,
    logo: siteMetadata.logo,
    foundingDate: info.localID.foundingDate,
    founders: info.localID.founders
      ? info.localID.founders.map(fouder => ({
          "@type": "Person",
          name: fouder,
        }))
      : [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: info.email.address,
        telephone: info.phone.number,
        contactType: "customer service",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: info.address.locality,
      addressRegion: info.address.region,
      addressCountry: info.address.country,
      postalCode: info.address.postalCode,
    },
    sameAs: social.networks.map(network => network.link),
  })

  return (
    <Layout>
      <SEO
        titleTemplate={`%s : ${siteMetadata.slogan}`}
        description={metadata.description}
        image={ogImage}
        structuredData={structuredDataOrganization}
      />
      <Template flipcards={flipcards} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        flipcards {
          label
          back {
            description
            link
            linkText
            title
          }
          front {
            icon
            img {
              childImageSharp {
                fluid(maxWidth: 600, quality: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        metadata {
          dateModified
          cover {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
