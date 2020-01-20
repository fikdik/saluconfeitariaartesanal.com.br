import React from "react"

import FlipCard from "~/components/FlipCard"

export default function HomePageTemplate({ data }) {
  const { flipcards } = data
  return (
    <main className="flex-auto">
      <div className="py-6 container flex flex-wrap">
        {flipcards.map(flipcard => (
          <FlipCard data={flipcard} key={data?.front?.title} />
        ))}
      </div>
    </main>
  )
}
