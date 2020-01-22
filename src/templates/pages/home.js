import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import FlipCard from "~/components/FlipCard"
import Layout from "~/layouts/Layout"

export const Template = ({ data }) => {
  const { flipcards } = data
  return (
    <main className="flex-auto">
      <div className="py-6 container flex flex-wrap">
        {flipcards.map(flipcard => (
          <FlipCard data={flipcard} key={data?.front?.title} />
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
      <Template data={frontmatter} />
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
