import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SmartLink from "~/components/SmartLink"
import CleanLayout from "~/layouts/CleanLayout"

export const Template = ({ data }) => {
  const { links } = data
  return (
    <main className="t-links">
      <div className="p-4 mx-auto max-w-4xl flex flex-col items-center">
        {links.map(link => (
          <SmartLink
            className="link bg-brand-3-2 text-brand-1-5 font-bold"
            url={link.url}
            key={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </div>
      <div className="mx-auto max-w-3xl">Redes Sociais</div>
    </main>
  )
}

export default function EspeciaisPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <CleanLayout>
      <Template data={{ ...frontmatter }} />
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
