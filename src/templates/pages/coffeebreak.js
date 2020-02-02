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
  texts,
  cards,
  content,
  contentComponent,
  SForm,
}) => {
  const MDComponent = contentComponent || Content
  return (
    <main className="flex-auto">
      <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div className="container">
          <div className="responsive-columns">
            {texts.map(({ paragraph }, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap mb-20">
            {cards.map(card => (
              <div
                className="py-2 flex flex-auto text-brand-4-6 md:w-1/2 md:p-2"
                key={card.title}
              >
                <div className="p-8 bg-gray-100 border-gray-300 border-2 rounded flex-auto flex flex-col items-center justify-around hover:border-brand-3-3">
                  <div className="block">
                    <PreviewCompatibleImage
                      className="w-32 h-auto"
                      imageInfo={{ image: card.icon, alt: card.title }}
                    />
                  </div>

                  <h2 className="my-6 text-2xl font-bold">{card.label}</h2>
                  <p className="my-6">{card.description}</p>
                  <a
                    class="btn uppercase bg-brand-3-1 text-brand-1-5"
                    href={card.linkUrl}
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container flex flex-wrap-reverse items-center">
          {!!SForm && (
            <div className="p-4  flex-auto md:px-10">
              <div id="solicite"></div>
              <div className="text-3xl font-bold md:text-brand-3-3">
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

export default function CoffeBreakPage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title, texts, cards, metadata } = frontmatter
  const ogImage = metadata.cover
    ? metadata.cover.childImageSharp.fluid.src
    : null

  return (
    <Layout>
      <SEO title={title} description={metadata.description} image={ogImage} />
      <Template
        title={title}
        texts={texts}
        cards={cards}
        content={html}
        contentComponent={HTMLContent}
        SForm={SimpleForm}
      />
    </Layout>
  )
}

CoffeBreakPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query CoffeebreakPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        texts {
          paragraph
        }
        cards {
          label
          description
          icon {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkText
          linkUrl
        }
        metadata {
          dateModified
          cover {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
      html
    }
  }
`
