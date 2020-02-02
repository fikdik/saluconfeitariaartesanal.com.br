import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef(
  ({ to, className, activeClassName, children }, ref) => {
    const link = to || "/"
    return (
      <>
        {link.startsWith("/") && !link.startsWith("//") ? (
          <Link
            className={className}
            activeClassName={activeClassName || "active"}
            component={Link}
            ref={ref}
            to={link}
          >
            {children}
          </Link>
        ) : link.startsWith("#") ? (
          <a className={className} ref={ref} href={link}>
            {children}
          </a>
        ) : (
          <a
            className={className}
            ref={ref}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )}
      </>
    )
  }
)

SmartLink.propTypes = {
  to: PropTypes.String,
}

SmartLink.defaultProps = {
  to: null,
}
export default SmartLink
