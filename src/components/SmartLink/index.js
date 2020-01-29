import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef((props, ref) => {
  const link = props.to || "/"
  return (
    <>
      {link.startsWith("/") && !link.startsWith("//") ? (
        <Link
          {...{
            activeClassName: "active",
            ...props,
            component: Link,
            ref: ref,
            to: link,
          }}
        >
          {props.children}
        </Link>
      ) : link.startsWith("#") ? (
        <a {...{ ...props, ref, href: link }}>{props.children}</a>
      ) : (
        <a
          {...{
            ...props,
            ref,
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
          {props.children}
        </a>
      )}
    </>
  )
})

SmartLink.propTypes = {
  to: PropTypes.String,
}

SmartLink.defaultProps = {
  to: null,
}
export default SmartLink
