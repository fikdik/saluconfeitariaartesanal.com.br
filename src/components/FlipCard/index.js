import React, { useMemo } from "react"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

export default function FlipCard({ data, key }) {
  const { label, front, back } = data
  const image = useMemo(
    () =>
      front && front.img && front.img.childImageSharp
        ? front.img.childImageSharp.fluid.src
        : front?.img,
    [front]
  )
  return (
    <div className={styles.flipCard} key={key}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div
            className="h-full bg-cover bg-center rounded"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className="h-full flex flex-col justify-center items-center rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <SVGIcon className="h-16 w-16" name={front?.icon}></SVGIcon>
              <span className="text-xl font-bold">{label}</span>
            </div>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className="h-full p-4 flex flex-col justify-around items-center rounded-lg">
            <h3 className="font-bold text-xl">{back?.title}</h3>
            <div>{back?.description}</div>
            <SmartLink className="btn bg-brand-1-4" to={back?.link}>
              {back?.linkText || "Saiba Mais..."}
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  )
}
