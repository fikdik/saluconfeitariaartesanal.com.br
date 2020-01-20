import React from "react"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <section id="page-header">
      <div className="bg-topBar-colorBG text-topBar-colorText p-2 hidden sm:block">
        <div className="container">
          <div>
            <SmartLink className="flex items-center text-topBar-colorLink hover:text-topBar-colorHover">
              <SVGIcon name="envelope" className="h-4 w-4 mr-3" />
              saluconfeitariaartesanal@gmail.com
            </SmartLink>
          </div>
          <div></div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}
