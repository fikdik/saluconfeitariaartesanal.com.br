import React, { useState } from "react"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

import menu from "content/settings/menu.json"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="container navbar">
      <div className="navbar-container">
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
            className="mt-1 block px-2 py-1 text-black font-semibold uppercase border-b-2 border-transparent hover:border-red-500 sm:mt-0 sm:ml-2"
            to={link.to}
            href={link.href}
          >{link.label}</SmartLink>
        ))}
      </nav>
    </div>
  )
}
