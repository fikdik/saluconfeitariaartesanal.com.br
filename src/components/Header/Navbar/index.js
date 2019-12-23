import React, { useState } from "react"

import styled, { css } from "styled-components"

import SmartLink from "~/components/SmartLink"
import media from "~/theme/MediaQueries"

import BurgerMenu from "./BurgerMenu"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <ContainerBG>
      <Container navbarOpen={navbarOpen}>
        <div>
          <Brand to="/">
            <img src="/img/salu-logo.svg" alt="Salu Logo" />
          </Brand>
          <BurgerMenu toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        </div>
        <ul className={navbarOpen ? "open" : ""}>
          <li>
            <SmartLink to="/">Home</SmartLink>
          </li>
          <li>
            <SmartLink to="/sobre">Sobre</SmartLink>
          </li>
          <li>
            <SmartLink to="/blog">Blog</SmartLink>
          </li>
          <li>
            <SmartLink to="/contato">Contato</SmartLink>
          </li>
        </ul>
      </Container>
    </ContainerBG>
  )
}

const ContainerBG = styled.section``

const Container = styled.nav`
  ${props => props.theme.container}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: none;
    a {
      width: 100%;
      padding: 0.75rem;
      text-align: center;
      text-transform: uppercase;
      &.active {
        font-weight: bold;
      }
      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  ${media.tablet} {
    flex-direction: row;
    > div {
      display: block;
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }

  ${props =>
    props.navbarOpen &&
    css`
      ul {
        display: block;
        a {
          display: block;
          text-align: center;
          color: #111;
          padding: 1.2rem;
          font-size: 1.5rem;
        }
      }
    `};
`

const Brand = styled(SmartLink)`
  img {
    padding: 1rem 0;
    width: 100px;
  }
  ${media.tablet} {
    img {
      width: 144px;
    }
  }
`
