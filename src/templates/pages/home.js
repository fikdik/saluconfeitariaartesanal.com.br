import React from "react"

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
        {flipcards.map(flipcard => (
          <FlipCard data={flipcard} key={flipcard.front.title} />
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
  return (
    <Layout>
      <SEO
        titleTemplate={`%s : ${siteMetadata.slogan}`}
        meta={[
          {
            name: "geo.position",
            content: `${siteMetadata.geo.position.latitude}; ${siteMetadata.geo.position.longitude}`,
          },
          { name: "geo.placename", content: siteMetadata.geo.placename },
          { name: "geo.region", content: siteMetadata.geo.region },
        ]}
      />
      <Template flipcards={frontmatter.flipcards} />
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
  query HomePage($id: String!) {
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
      }
    }
  }
`
