import React, { useState } from "react"

import menu from "content/settings/menu.json"
import siteMetadata from "content/settings/siteMetadata.json"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="bg-navBar-colorBG container sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <SmartLink to="/">
            <img
              className="h-16"
              src={siteMetadata.logo}
              alt={siteMetadata.title}
            />
          </SmartLink>
        </div>
        <div className="sm:hidden">
          <BurgerMenu toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        </div>
      </div>
      <nav
        className={`text-custom-1-6 px-2 pt-2 pb-4 text-center sm:flex sm:p-0 ${
          navbarOpen ? "block" : "hidden"
        }`}
      >
        {menu.links.map(link => (
          <SmartLink
            key={link.label}
            className="mt-1 block px-2 py-1 font-semibold uppercase hover:text-navBar-colorHover border-b-2 border-transparent hover:border-brand-3-3 sm:mt-0 sm:ml-2"
            activeClassName="text-custom-1-3"
            to={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </nav>
    </div>
  )
}
