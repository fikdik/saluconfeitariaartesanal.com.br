import React from "react"

import PropTypes from "prop-types"

import FlipCard from "~/components/FlipCard"
import Layout from "~/layouts/Layout"

// import { Container, FlipCardBack, FlipCardFront } from "./styles"

export function HomePageTemplate({ data }) {
  const { flipcards } = data
  return (
    <main className="flex-auto">
      <div className="container flex flex-wrap text-white">
        {flipcards.map(flipcard => (
          <FlipCard data={flipcard} key={data?.front?.title} />
        ))}
      </div>
    </main>
  )
}

export default function HomePage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate data={frontmatter} />
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
  {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        flipcards {
          back {
            description
            link
            linkText
            title
          }
          front {
            title
            icon
            imgPath
          }
        }
      }
    }
  }
`
