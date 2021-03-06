import React from "react"

import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Content, { HTMLContent } from "~/components/Content"
import PreviewCompatibleImage from "~/components/PreviewCompatibleImage"
import SEO from "~/components/SEO"
import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"

import styles from "./simple.module.css"

export const Template = ({
  title,
  galery,
  content,
  contentComponet,
  SForm,
}) => {
  const MDComponent = contentComponet || Content
  return (
    <main className="flex-auto">
      <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div className="py-6 container">
          <div className="flex flex-wrap py-10">
            {galery.map((item, index) => (
              <div className="p-2 w-full sm:w-1/2 md:w-1/3" key={String(index)}>
                <div className={styles.imageContainer}>
                  <PreviewCompatibleImage
                    imageInfo={{ image: item.image, alt: item.label }}
                  />
                  {item.label && (
                    <div className="bg-brand-3-2 text-brand-4-4 absolute bottom-0 right-0 py-2 pl-6 pr-3 z-10 font-bold rounded-tl-full text-right">
                      {item.label}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container flex flex-wrap-reverse items-center">
          {!!SForm && (
            <div className="p-4 flex-auto md:px-10 md:w-1/2">
              <div className="text-brand-4-6 text-3xl font-bold md:text-brand-3-3">
                Encomende
              </div>
              <SForm />
            </div>
          )}
          <MDComponent
            className={`${styles.simplePageMD} md:w-1/2`}
            content={content}
          />
        </div>
      </div>
    </main>
  )
}

export default function SimplePage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title, galery, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null
  return (
    <Layout>
      <SEO title={title} description={metadata.description} image={ogImage} />
      <Template
        title={title}
        galery={galery}
        content={html}
        contentComponet={HTMLContent}
        SForm={SimpleForm}
      />
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
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        galery {
          label
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
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
