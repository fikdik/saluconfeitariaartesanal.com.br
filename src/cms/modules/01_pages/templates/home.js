import React from "react"

import PropTypes from "prop-types"

import HomePageTemplate from "~/templates/HomePageTamplate"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <HomePageTemplate data={data}></HomePageTemplate>
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

export default Preview
