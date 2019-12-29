import React from "react"

import SmartLink from "~/components/SmartLink"

export default function Signature(props) {
  const thisYear = new Date().getFullYear()
  return (
    <div className="signature" {...props}>
      © Copyright 2013 - {thisYear} <br className="md:hidden" />
      desenvolvido por
      <SmartLink to="https://fikdik.com.br">
        {" "}
        <small>#</small>
        fikdik
      </SmartLink>
    </div>
  )
}
