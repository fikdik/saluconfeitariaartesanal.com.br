import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "~/components/SEO"
import SmartLink from "~/components/SmartLink"
import SocialIcons from "~/components/SocialIcons"
import CleanLayout from "~/layouts/CleanLayout"

import styles from "./links.module.css"

export const Template = ({ links }) => {
  return (
    <main className="flex-auto flex flex-col">
      <div className="p-4 mx-auto max-w-4xl flex flex-col items-center">
        {links.map(link => (
          <SmartLink
            className={`${styles.link} bg-brand-3-2 text-brand-1-5 font-bold`}
            to={link.url.startsWith("https:") ? link.url : "/" + link.url}
            key={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </div>
      <div className="flex items-center mx-auto max-w-3xl text-white">
        <SocialIcons />
      </div>
    </main>
  )
}

export default function EspeciaisPage({ data }) {
  const { frontmatter } = data.markdownRemark
  const { links, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null

  return (
    <CleanLayout>
      <SEO title="Links" description={metadata.description} image={ogImage} />
      <Template links={links} />
    </CleanLayout>
  )
}

EspeciaisPage.propTypes = {
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
        links {
          label
          url
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
