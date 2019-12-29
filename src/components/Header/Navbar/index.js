import React, { useState } from "react"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="container navbar">
      <div className="navbar-container">
        <div>
          <img className="h-16" src="/img/salu-logo.svg" alt="Workcation" />
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
        <a
          href="#"
          className="block px-2 py-1 text-black font-semibold rounded hover:bg-gray-800"
        >
          List your property
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Trips
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Messages
        </a>
      </nav>
    </div>
  )
}
