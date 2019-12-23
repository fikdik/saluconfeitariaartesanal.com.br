import styled from "styled-components"

import DynamicComponent from "~/global/DynamicComponent"
import theme from "~/theme"

const { heading1, textStyle1 } = theme.textStyles

const createTypoComponent = props => {
  const TypoComponent = styled(DynamicComponent)``

  TypoComponent.defaultProps = {
    ...props,
  }

  return TypoComponent
}

export const Heading1 = createTypoComponent(heading1)
export const TextStyle1 = createTypoComponent(textStyle1)
