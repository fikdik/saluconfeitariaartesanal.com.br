import React from "react"
import styled from "styled-components"

export default function FlipCard({ children }) {
  return (
    <Container>
      <FlipCardBox>
        <FlipCardFront>
          {children[0] || "This component needs two children"}
        </FlipCardFront>
        <FlipCardBack>
          {children[1] || "This component needs a second child element"}
        </FlipCardBack>
      </FlipCardBox>
    </Container>
  )
}

const Container = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  /* Remove this if you don't want the 3D effect */
  perspective: 1000px;
`

const FlipCardBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${Container}:hover & {
    transform: rotateY(180deg);
  }
`

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: #bbb;
  color: black;
`
const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`
