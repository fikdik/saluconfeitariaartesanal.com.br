import React from "react"
import { storiesOf } from "@storybook/react"

import SmartLink from "./index.js"

storiesOf("SmartLink", module)
  .add("Without link", () => <SmartLink>Sem link</SmartLink>)
  .add("Internal link", () => <SmartLink to="/">Internal link</SmartLink>)
  .add("External link", () => (
    <SmartLink href="https://github.com/">External link</SmartLink>
  ))
