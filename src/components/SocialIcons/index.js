import React from "react"

import { networks } from "content/info/social.json"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

export default function SocialIcons() {
  return (
    <ul className="flex">
      {networks.map((network, index) => (
        <li key={`${network.name} - ${index}`}>
          <SmartLink to={network.link}>
            <SVGIcon
              className={`${styles.social} ${
                styles[network.name]
              } w-10 h-10 p-1 rounded-lg mr-2`}
              name={network.name}
            />
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}
