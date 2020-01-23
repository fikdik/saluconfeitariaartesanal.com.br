import React from "react"

import SmartLink from "~/components/SmartLink"
import Layout from "~/layouts/Layout"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="flex-auto">
          <div className="bg-brand-1-4 text-brand-3-0 p-6 text-center text-3xl font-serif md:text-4xl">
            <h1>Blog</h1>
          </div>
          <div className="container py-10">
            <div className="flex flex-wrap -m-2">
              {[1, 2, 3, 4, 5, 6].map(post => (
                <div className="w-full flex flex-col md:w-1/2 p-4" key={post}>
                  <div className="bg-brand-3-3 p-4 rounded-lg flex-auto flex flex-col justify-between">
                    <div className="flex flex-col">
                      {post % 3 !== 0 && (
                        <div className="h-40 mr-4 mb-4 rounded-lg overflow-hidden flex items-center">
                          <img
                            className="object-cover"
                            src="/img/bolo-00001.jpg"
                            alt=""
                          />
                        </div>
                      )}
                      <div className="flex flex-col mb-4">
                        <SmartLink className="text-2xl text-brand-2-4">
                          title do post {post}
                        </SmartLink>
                        <span className="text-lg text-custom-1-5">
                          data e dia do ano
                        </span>
                      </div>
                    </div>
                    <div className="text-custom-1-4 mb-6">
                      This week we’ll take a look at all the steps required to
                      make astonishing coffee with a Chemex at home. The Chemex
                      Coffeemaker is a manual, pour-over style glass-container
                      coffeemaker that Peter Schlumbohm invented in 1941, and
                      which continues to be manufactured by the Chemex
                      Corporation in Chicopee, Massachusetts
                    </div>
                    <SmartLink className="btn">Continue lendo...</SmartLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
