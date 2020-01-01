import React from "react"

import FlipCard from "~/components/FlipCard"

export default function HomePageTemplate({ data }) {
  const { flipcards } = data
  return (
    <main className="flex-auto">
      <div className="container flex flex-wrap text-white">
        {flipcards.map(flipcard => (
          <FlipCard data={flipcard} key={data?.front?.title} />
        ))}
      </div>
    </main>
  )
}
