const _ = require("lodash")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

if (process.env.NODE_ENV === "development") {
  exports.onCreateDevServer = ({ app }) => {
    const fsMiddlewareAPI = require("netlify-cms-backend-fs/dist/fs")
    fsMiddlewareAPI(app)
  }
}
