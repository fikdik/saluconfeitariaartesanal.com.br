import React from "react"

import _ from "lodash"

import PreviewCompatibleImage from "../PreviewCompatibleImage"
import SmartLink from "../SmartLink"

export default function BlogPostListItem({
  path,
  title,
  description,
  date,
  highlight,
  cover,
  tags,
}) {
  return (
    <div className="w-full flex flex-col md:w-1/2 p-2">
      <div
        className={`${
          highlight ? "bg-brand-3-1" : "bg-gray-200"
        } p-6 rounded-lg flex-auto flex flex-col justify-between`}
      >
        <div className="flex flex-col items-start lg:flex-row">
          {cover && (
            <div className="h-40 w-full mr-4 mb-4 rounded-lg overflow-hidden flex items-center lg:w-1/3">
              <PreviewCompatibleImage
                className="h-40 w-full"
                imageInfo={{
                  image: cover,
                  alt: `image for post title ${title}`,
                }}
              />
            </div>
          )}
          <div className="flex flex-col mb-4">
            <SmartLink className="text-2xl text-brand-2-4 underline" to={path}>
              {title}
            </SmartLink>
            <span className="text-lg text-custom-1-5">{date}</span>
          </div>
        </div>
        <div className="text-custom-1-4 mb-6">{description}</div>
        <div>
          <div className="text-brand-4-5 font-bold mb-6 hover:underline">
            <SmartLink to={path}>Continue lendo...</SmartLink>
          </div>
          <div className="flex flex-wrap">
            {tags.map(tag => (
              <div className="bg-brand-1-3 text-brand-3-3 px-4 py-2 mr-2 mb-2 rounded-full text-xs">
                <SmartLink to={`/tags/${_.kebabCase(tag)}`}>{tag}</SmartLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
