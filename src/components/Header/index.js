import React from "react"

import styled from "styled-components"

import SmartLink from "../../components/SmartLink"
import SVGIcon from "../../components/SVGIcon"
import media from "../../theme/MediaQueries"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <Container>
      <TopBarBG>
        <TopBar>
          <div>
            <SmartLink>
              <SVGIcon name="envelope" />
              saluconfeitariaartesanal@gmail.com
            </SmartLink>
          </div>
          <div></div>
        </TopBar>
      </TopBarBG>
      <Navbar />
    </Container>
  )
}

const Container = styled.section``

const TopBarBG = styled.div`
  background: #222;
`
const TopBar = styled.div`
  ${props => props.theme.container}
  display: none;

  color: #eee;

  a {
    display: flex;
    align-items: center;
    height: 2.5rem;
  }

  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 1rem;
  }

  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
