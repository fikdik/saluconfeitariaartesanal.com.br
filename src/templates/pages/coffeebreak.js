import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import SEO from "~/components/SEO"
import SimpleForm from "~/components/SimpleForm"
import Layout from "~/layouts/Layout"

export const Template = ({ data }) => {
  const { title, texts, cards, html, SForm } = data
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
              <div className="py-2 flex flex-auto text-brand-4-6 md:w-1/2 md:p-2">
                <div
                  className="p-8 bg-gray-100 border-gray-300 border-2 rounded flex-auto flex flex-col items-center justify-around hover:border-brand-3-3"
                  key={card.title}
                >
                  <div className="block">
                    <Img
                      className="w-32 h-auto"
                      fluid={card.icon.childImageSharp.fluid}
                      alt={card.title}
                    ></Img>
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
          {SForm && (
            <div className="p-4  flex-auto md:px-10">
              <div id="solicite"></div>
              <div className="text-3xl font-bold">Encomende</div>
              <SForm></SForm>
            </div>
          )}
          <div
            className="simple-page-md md:w-1/2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </main>
  )
}

export default function CoffeBreakPage({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} />
      <Template data={{ ...frontmatter, html, SForm: SimpleForm }} />
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
      }
      html
    }
  }
`