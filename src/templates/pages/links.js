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
            url={link.url}
            key={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </div>
      <div className="mx-auto max-w-3xl text-white">
        <SocialIcons />
      </div>
    </main>
  )
}

export default function EspeciaisPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <CleanLayout>
      <SEO title="Links" />
      <Template links={frontmatter.links} />
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
  query LinksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        links {
          label
          url
        }
      }
    }
  }
`
