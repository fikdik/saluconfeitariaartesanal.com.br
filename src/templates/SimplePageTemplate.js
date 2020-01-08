import React from "react"

import Img from "gatsby-image"

export default function SimplePageTemplate({ data }) {
  const { title, galery, html, SForm } = data
  return (
    <main className="flex-auto">
      <div className="bg-red-700 p-6 text-center text-white text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="bg-svg">
        <div className="py-6 container">
          <div className="flex flex-wrap py-10">
            {galery.map(({label, picture }, index) => (
              <div className="p-2 w-full sm:w-1/2 md:w-1/3" key={label+index}>
                <div className="relative rounded overflow-hidden">
                  <Img
                    fluid={picture.childImageSharp.fluid}
                    alt={label}
                  ></Img>
                  <div className="absolute bottom-0 right-0 p-2 z-10  text-2xl font-bold bg-red-800 text-gray-100">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container flex flex-wrap-reverse items-center">
          {SForm && (
            <div className="p-4  flex-auto md:px-10">
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
