import React from "react"

import { storiesOf } from "@storybook/react"

import Layout from "./index.js"

storiesOf("Layout", module).add("Default", () => (
  <Layout>
    <p>this text has no styles</p>
    <p>but the header and the footer should be in right place</p>
  </Layout>
))
