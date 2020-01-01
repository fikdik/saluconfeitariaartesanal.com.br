import React from "react"

import Img from "gatsby-image"

export default function SimplePageTemplate({ data }) {
  const { title, galery, html, SForm } = data
  return (
    <main className="flex-auto">
      <div className="bg-red-700 p-6 text-center text-white text-3xl font-serif md:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <div className="flex flex-wrap py-10">
          {galery.map(({ picture }) => (
            <div className="p-2 w-full sm:w-1/2 md:w-1/3">
              <Img
                className="rounded"
                fluid={picture.childImageSharp.fluid}
                alt=""
              ></Img>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap-reverse">
          {SForm && (
            <div className="p-4 bg-gray-400 flex-auto">
              <div className=" text-3xl">Encomende</div>
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
