import React from "react"

import PropTypes from "prop-types"

import { Template } from "~/templates/pages/home"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <Template flipcards={data.flipcards} />
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
