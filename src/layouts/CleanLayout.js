import React from "react"

import siteMetadata from "content/settings/siteMetadata.json"

import Signature from "~/components/Footer/Signature"
import SmartLink from "~/components/SmartLink"

export default function CleanLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-2-5">
      <header className="flex justify-center items-center w-full py-8">
        <SmartLink to="/">
          <img
            className="h-16"
            src={siteMetadata.logoAlt}
            alt={`Logo, ${siteMetadata.name}`}
          />
        </SmartLink>
      </header>
      <section id="main" className="flex-grow flex">
        {children}
      </section>
      <footer>
        <Signature></Signature>
      </footer>
    </div>
  )
}
