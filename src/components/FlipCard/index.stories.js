import React from "react"
import { storiesOf } from "@storybook/react"

import FlipCard from "./index.js"

storiesOf("FlipCard", module).add("Default", () => (
  <FlipCard>
    <div>front</div>
  </FlipCard>
))
