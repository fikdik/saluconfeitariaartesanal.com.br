import React, { useMemo } from "react"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

export default function FlipCard({ data, key }) {
  const { front, back } = data
  const image = useMemo(
    () =>
      front && front.img && front.img.childImageSharp
        ? front.img.childImageSharp.fluid.src
        : front?.img,
    [front]
  )
  return (
    <div className="flip-card" key={key}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            className="h-full bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className="h-full flex flex-col justify-center items-center rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <SVGIcon className="h-16 w-16" name={front?.icon}></SVGIcon>
              <span className="text-xl font-bold">{front?.title}</span>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="bg-red-600 h-full p-4 flex flex-col justify-around items-center rounded-lg">
            <h3 className="font-bold text-xl">{back?.title}</h3>
            <div>{back?.description}</div>
            <SmartLink className="btn" to={back?.link}>
              {back?.linkText || "Saiba Mais..."}
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  )
}
