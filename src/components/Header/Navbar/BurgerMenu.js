import React from "react"

import styled from "styled-components"

import media from "~/theme/MediaQueries"

const Burgermenu = props => {
  return (
    <Container onClick={props.toggleNavbar}>
      <div className={props.navbarOpen ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Container>
  )
}

export default Burgermenu

const Container = styled.div`
  cursor: progress;

  & span {
    background: #333;
    display: block;
    position: relative;
    width: 2rem;
    height: 0.3rem;
    margin-bottom: 0.4rem;
    transition: all ease-in-out 200ms;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -0.7rem;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 0.7rem;
  }

  ${media.tablet} {
    display: none;
  }
`
