import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef((props, ref) => {
  const link = props.href || props.to || props.url || "/"
  return (
    <>
      {link.startsWith("/") && !link.startsWith("//") ? (
        <Link
          component={Link}
          ref={ref}
          to={link}
          {...props}
          activeClassName="active"
        >
          {props.children}
        </Link>
      ) : (
        <a
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          {...props}
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
