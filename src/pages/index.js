import React from "react"
import styled from "styled-components"
import Layout from "../layouts/Layout"
import FlipCard from "../components/FlipCard"
import SVGIcon from "../components/SVGIcon"
import SmartLink from "../components/SmartLink"

export default function pages() {
  return (
    <Layout>
      <Container>
        <FlipCard>
          <FlipCardFront bgimage={"/img/bolo-00003.jpg"}>
            <div>
              <SVGIcon name="smile"></SVGIcon>
              <div>Bolos Apaixonantes</div>
            </div>
          </FlipCardFront>
          <FlipCardBack>
            <h3>Bolos e Doces </h3>
            <div>
              Adoramos experimentar, veja alguns dos bolos que ja fizemos e
              solicite um sabor.
            </div>
            <SmartLink to="/bolos">Saiba Mais...</SmartLink>
          </FlipCardBack>
        </FlipCard>
        <FlipCard>
          <FlipCardFront bgimage={"/img/coffee-00001.jpg"}>
            <div>
              <SVGIcon name="coffee"></SVGIcon>
              <div>Coffee Breaks</div>
            </div>
          </FlipCardFront>
          <FlipCardBack>
            <h3>Coffee Break </h3>
            <div>O coffee break para seu evento</div>
            <SmartLink to="/bolos">Solicite</SmartLink>
          </FlipCardBack>
        </FlipCard>
        <FlipCard>
          <FlipCardFront bgimage={"/img/especial-00001.jpg"}>
            <div>
              <SVGIcon name="gift"></SVGIcon>
              <div>Presentes Especiais</div>
            </div>
          </FlipCardFront>
          <FlipCardBack>
            <h3>Produtos Especiais</h3>
            <div>Peça aquela encomenda para o seu dia especial.</div>
            <SmartLink to="/bolos">Saiba Mais...</SmartLink>
          </FlipCardBack>
        </FlipCard>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${props => props.theme.container}
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`

const FlipCardFront = styled.div`
  font-size: 1.5rem;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: rgba(0, 0, 0, 0.3);
  }

  svg {
    height: 3rem;
  }
`

const FlipCardBack = styled.div`
  height: 100%;
  background: #f00;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    width: fit-content;
    padding: 8px 12px;
    border: 1px solid #fff;
    border-radius: 8px;
  }
`
