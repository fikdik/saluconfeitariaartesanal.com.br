import React from "react"

import Signature from "~/components/Footer/Signature"
import SmartLink from "~/components/SmartLink"

export default function CleanLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-center items-center w-full">
        <SmartLink to="/">
          <img className="h-16" src="/img/salu-logo.svg" alt="the brand" />
        </SmartLink>
      </header>
      <section id="main" className="flex-grow">
        {children}
      </section>
      <footer>
        <Signature></Signature>
      </footer>
    </div>
  )
}
