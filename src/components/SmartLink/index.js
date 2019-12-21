import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

const SmartLink = React.forwardRef((props, ref) => {
  return (
    <>
      {props.to ? (
        <Link component={Link} ref={ref} {...props} activeClassName="active">
          {props.children}
        </Link>
      ) : (
        <a ref={ref} target="_blank" {...props}>
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
