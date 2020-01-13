import React from "react"

import SmartLink from "~/components/SmartLink"

export default function LinksPageTemplate({ data }) {
  const { links } = data
  return (
    <main className="t-links">
      <div className="py-6 mx-auto max-w-4xl flex flex-col items-center">
        {links.map(link => (
          <SmartLink className="link" url={link.url} key={link.url}>
            {link.label}
          </SmartLink>
        ))}
      </div>
      <div className="mx-auto max-w-3xl">Redes Sociais</div>
    </main>
  )
}
