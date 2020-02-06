import React from "react"

import PropTypes from "prop-types"

import { Template } from "~/templates/pages/simple"

function Preview({ entry, widgetFor }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Template
        title={data.title}
        galery={data.galery}
        content={widgetFor("body")}
      />
    )
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
