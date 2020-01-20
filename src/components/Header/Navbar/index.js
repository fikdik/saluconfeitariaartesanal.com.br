import React, { useState } from "react"

import menu from "content/settings/menu.json"

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
            <img className="h-16" src="/img/salu-logo.svg" alt="the brand" />
          </SmartLink>
        </div>
        <div className="sm:hidden">
          <BurgerMenu toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        </div>
      </div>
      <nav
        className={`px-2 pt-2 pb-4 text-center sm:flex sm:p-0 ${
          navbarOpen ? "block" : "hidden"
        }`}
      >
        {menu.links.map(link => (
          <SmartLink
            key={link.label}
            className="text-navBar-colorLink mt-1 block px-2 py-1 font-semibold uppercase hover:text-navBar-colorHover border-b-2 border-transparent hover:border-navBar-colorBorderBottom sm:mt-0 sm:ml-2"
            activeClassName="text-navBar-colorActive"
            to={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </nav>
    </div>
  )
}
