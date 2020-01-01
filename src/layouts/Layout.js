import React from "react"

import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section id="main" className="py-6 flex-grow">
        {children}
      </section>
      <Footer />
    </div>
  )
}
