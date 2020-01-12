import React from "react"

import SmartLink from "~/components/SmartLink"

export default function LinksPageTemplate({ data }) {
  const { links } = data
  return (
    <main className="flex-auto">
      <div className="py-6 container flex flex-wrap text-white">
        {links.map(link => (
          <SmartLink url={link.url} key={link.url}>
            {link.label}
          </SmartLink>
        ))}
      </div>
    </main>
  )
}
