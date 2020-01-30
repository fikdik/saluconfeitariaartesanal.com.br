import React from "react"

import PropTypes from "prop-types"

import { Template } from "~/templates/pages/coffeebreak"

function Preview({ entry, widgetFor }) {
  const data = entry.getIn(["data"]).toJS()

  console.log(data)

  if (data) {
    return (
      <Template
        title={data.title}
        texts={data.texts}
        cards={data.cards}
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
