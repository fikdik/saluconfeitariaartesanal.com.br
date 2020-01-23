import React from "react"

import CMS from "netlify-cms-app"
import PropTypes from "prop-types"

import { Template } from "~/templates/blog/post"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <Template data={data} />
  } else {
    return <div>Loading ...</div>
  }
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default function registerPreview() {
  CMS.registerPreviewTemplate("blog", Preview)
}
