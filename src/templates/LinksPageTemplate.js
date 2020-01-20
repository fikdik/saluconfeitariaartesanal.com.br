import React from "react"

import SmartLink from "~/components/SmartLink"

export default function LinksPageTemplate({ data }) {
  const { links } = data
  return (
    <main className="t-links">
      <div className="p-4 mx-auto max-w-4xl flex flex-col items-center">
        {links.map(link => (
          <SmartLink
            className="link bg-brand-3-2 text-brand-1-5 font-bold"
            url={link.url}
            key={link.url}
          >
            {link.label}
          </SmartLink>
        ))}
      </div>
      <div className="mx-auto max-w-3xl">Redes Sociais</div>
    </main>
  )
}
