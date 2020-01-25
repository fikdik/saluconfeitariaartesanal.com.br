import React from "react"

import Img from "gatsby-image"
import _ from "lodash"

import SmartLink from "../SmartLink"

export default function BlogPostListItem({ post }) {
  console.log(post)
  return (
    <div className="w-full flex flex-col md:w-1/2 p-2">
      <div
        className={`bg-brand-3-${
          post.frontmatter.featuredpost ? 2 : 0
        } p-6 rounded-lg flex-auto flex flex-col justify-between`}
      >
        <div className="flex flex-col items-start lg:flex-row">
          {post.frontmatter.featuredimage && (
            <div className="h-40 mr-4 mb-4 rounded-lg overflow-hidden flex items-center lg:w-1/3 lg:h-auto">
              <Img
                fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                alt={`image for post title ${post.title}`}
              />
            </div>
          )}
          <div className="flex flex-col mb-4">
            <SmartLink
              className="text-2xl text-brand-2-4 underline"
              to={post.fields.slug}
            >
              {post.frontmatter.title}
            </SmartLink>
            <span className="text-lg text-custom-1-5">
              {post.frontmatter.date}
            </span>
          </div>
        </div>
        <div className="text-custom-1-4 mb-6">
          {post.frontmatter.description}
        </div>
        <div>
          <div className="text-brand-4-5 font-bold mb-6 hover:underline">
            <SmartLink to={post.fields.slug}>Continue lendo...</SmartLink>
          </div>
          <div>
            {post.frontmatter.tags.map(tag => (
              <SmartLink
                className="bg-brand-1-0 text-brand-2-6 px-6 py-2 mr-2 rounded-full lg:text-sm"
                to={`/tags/${_.kebabCase(tag)}`}
              >
                {tag}
              </SmartLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
