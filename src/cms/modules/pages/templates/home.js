import React from "react"

import PropTypes from "prop-types"

import { HomePageTemplate } from "~/templates/Home"

function Preview({ entry, widgetFor }) {
  const data = entry.getIn(["data", "title"])
  console.log("teste ", data)
  return <HomePageTemplate></HomePageTemplate>
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Preview
