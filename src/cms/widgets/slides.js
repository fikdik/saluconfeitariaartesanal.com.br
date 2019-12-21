import React, { Component } from "react"
import styled from "styled-components"
import CMS from "netlify-cms-app"

// This is the editing component
const defaultSeparator = "\n\n---n\n"

export class SlidesControl extends Component {
  getValue() {
    return this.props.value ? this.props.value : ""
  }

  handleSlideChange(value, i) {
    const newValues = this.getValue().split(defaultSeparator)
    newValues[i] = value
    this.props.onChange(newValues.join(defaultSeparator))
  }

  render() {
    const slides = this.getValue().split(defaultSeparator)
    const slideControls = slides.map((slideContent, i) => (
      <SlideControl
        {...this.props}
        key={i}
        value={slideContent}
        onChange={value => this.handleSlideChange(value, i)}
      />
    ))
    return <div>{slideControls}</div>
  }
}

// This is the preview component
export const SlidesPreview = props => (
  <div>
    {props.value
      .split(props.field.get("separator", defaultSeparator))
      .map((val, i) => (
        <SlidePreview {...props} key={i} value={val} />
      ))}
  </div>
)

const SlideControlHeader = styled.div`
  /* styles omitted... */
`

const SlideControl = props => {
  const MarkdownControl = CMS.getWidget("markdown").control
  return (
    <div>
      <SlideControlHeader>Slide</SlideControlHeader>
      <MarkdownControl {...props} />
    </div>
  )
}

const SlidePreview = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (
    <div>
      <hr />
      <MarkdownPreview {...props} />
    </div>
  )
}
