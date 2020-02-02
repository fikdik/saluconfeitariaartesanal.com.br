import React from "react"

import Signature from "~/components/Footer/Signature"
import SmartLink from "~/components/SmartLink"

export default function CleanLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-2-5">
      <header className="flex justify-center items-center w-full py-8">
        <SmartLink className="text-2xl text-gray-200 hover:underline" to="/">
          {"Voltar para o site"}
        </SmartLink>
      </header>
      <section id="main" className="flex-grow flex bg-white">
        {children}
      </section>
      <footer>
        <Signature></Signature>
      </footer>
    </div>
  )
}
