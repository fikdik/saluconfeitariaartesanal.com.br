import React from "react"

import styled from "styled-components"

import SmartLink from "../SmartLink"
import SVGIcon from "../SVGIcon"
import Signature from "./Signature"

export default function Footer() {
  return (
    <ContainerBG>
      <Container>
        <FooterColumn>
          <img src="/img/salu-logo-bbg.svg" alt="Salu logo" />
          <span>Tudo feito com amor!</span>
        </FooterColumn>
        <FooterColumn>
          <header>Ultimas Gostosuras</header>
          <ul>
            <li>
              <SmartLink>
                <span>Post Title</span>
                <small>30 de outubro de 2019</small>
              </SmartLink>
            </li>
            <li>
              <SmartLink>
                <span>
                  Post Title 2 a very long long title, more them I expected to
                  be
                </span>
                <small>30 de outubro de 2019</small>
              </SmartLink>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <header>Contato</header>
          <dl>
            <SmartLink>
              <SVGIcon name="map-marker-alt" />
              <div>
                <dt>Endereço</dt>
                <dd>
                  Av. Dr Herman Mondenese Wanderley, 655, 1 - Jardim Camburi
                </dd>
              </div>
            </SmartLink>
            <SmartLink>
              <SVGIcon name="phone" />
              <div>
                <dt>Telefone / Whatsapp</dt>
                <dd>27 9 9625.0970</dd>
              </div>
            </SmartLink>
            <SmartLink>
              <SVGIcon name="envelope" />
              <div>
                <dt>Email</dt>
                <dd>saluconfeitariaartesanal@gmail.com</dd>
              </div>
            </SmartLink>
          </dl>
        </FooterColumn>
      </Container>
      <Signature fontSize={["0.75rem", "1rem"]} />
    </ContainerBG>
  )
}

export const ContainerBG = styled.section`
  background: #222;
`
export const Container = styled.div`
  ${props => props.theme.container}
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const FooterColumn = styled.div`
  padding: 1rem;
  flex: 1 0 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > img {
    width: 200px;
    max-width: 40%;
    margin-bottom: 1rem;
  }

  > span {
    color: #ccc;
    margin-bottom: 1rem;
  }

  > header {
    font-size: 1.23rem;
    border-left: 3px solid red;
    font-weight: bold;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    transition: transform ease 100ms;
    &:hover {
      transform: scale(1.03);
    }
    small {
      color: #ccc;
    }
  }

  dl {
    display: flex;
    flex-direction: column;
    svg {
      fill: red;
      flex: 0 0 2rem;
      height: 2rem;
      width: 2rem;
      margin-right: 0.618rem;
    }
    a {
      flex-direction: row;
      align-items: center;
    }
  }
  dt {
    font-weight: bold;
    margin-bottom: 0.618rem;
    display: flex;
    flex-direction: column;
  }
  dd {
    font-size: 0.85rem;
  }
`
