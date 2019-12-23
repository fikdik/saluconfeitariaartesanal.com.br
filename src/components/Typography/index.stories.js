import React from "react"

import { storiesOf } from "@storybook/react"

import { Heading1, TextStyle1 } from "~/Typography"

storiesOf("Typography", module)
  .add("headings", () => <Heading1>Heading1</Heading1>)
  .add("text styles", () => <TextStyle1>TextStyle1</TextStyle1>)
