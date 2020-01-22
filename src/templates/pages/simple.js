import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import PreviewCompatibleImage from "~/components/PreviewCompatibleImage"
import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"

export const Template = ({ data }) => {
  const { title, galery, html, SForm } = data
  return (
    <main className="flex-auto">
      <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div className="py-6 container">
          <div className="flex flex-wrap py-10">
            {galery.map(({ label, picture }, index) => (
              <div className="p-2 w-full sm:w-1/2 md:w-1/3" key={label + index}>
                <div className="relative rounded overflow-hidden">
                  <PreviewCompatibleImage
                    imageInfo={{
                      alt: label,
                      image: "/img/especial-00001.jpg",
                      ...picture,
                    }}
                  />
                  <div className="bg-brand-3-2 text-brand-4-4 absolute bottom-0 right-0 py-2 pl-6 pr-3 z-10  text-xl font-bold rounded-tl-full">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container flex flex-wrap-reverse items-center">
          {!!SForm && (
            <div className="p-4 flex-auto md:px-10">
              <div className="text-brand-4-6 text-3xl font-bold">Encomende</div>
              <SForm></SForm>
            </div>
          )}
          <div
            className="simple-page-content md:w-1/2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </main>
  )
}

export default function SimplePage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Template data={{ ...frontmatter, html, SForm: SimpleForm }} />
    </Layout>
  )
}

SimplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query SimplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        galery {
          label
          picture {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
