import React from "react"

import Img from "gatsby-image"

export default function CoffeeBreakPageTemplate({ data }) {
  const { title, texts, cards, html, SForm } = data
  return (
    <main className="flex-auto">
      <div className="bg-red-700 p-6 text-center text-white text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div className="container">
          <div className="">
            {texts.map(({ paragraph }, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap">
            {cards.map(card => (
              <div className="py-2 flex-auto text-gray-700 md:w-1/2 md:p-2">
                <div
                  className="p-8 bg-gray-100 border-gray-300 border-2 rounded flex flex-col items-center justify-around hover:border-green-300"
                  key={card.title}
                >
                  <div className="block">
                    <img
                      className="block h-32"
                      src={card.icon}
                      alt={card.title}
                    ></img>
                  </div>

                  <h2 className="my-6 text-2xl font-bold">{card.label}</h2>
                  <p className="my-6">{card.description}</p>
                  {/* <Img
                className="w-32"
                fluid={card.icon.childImageSharp.fluid}
                alt={card.title}
              ></Img> */}
                  <a class="btn uppercase" href={card.linkUrl}>
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
            className="simple-page-content md:w-1/2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </main>
  )
}
