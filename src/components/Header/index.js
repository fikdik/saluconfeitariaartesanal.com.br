import React from "react"

import { phone } from "content/info/contact"

import SmartLink from "~/components/SmartLink"
import SocialIcons from "~/components/SocialIcons"
import SVGIcon from "~/components/SVGIcon"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <section id="page-header">
      <div className="bg-brand-2-3 text-custom-1-0 p-2 hidden sm:block">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <SmartLink
                className="flex items-center hover:underline"
                to={`https://api.whatsapp.com/send?phone=${phone.number}&text=${phone.message}`}
              >
                <SVGIcon className="h-8 w-8 p-1" name="whatsapp" />
                <span>{phone.display}</span>
              </SmartLink>
            </div>
            <div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}
