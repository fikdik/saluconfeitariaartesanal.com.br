import React from "react"

import FlipCard from "~/components/FlipCard"
import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"
import Layout from "~/layouts/Layout"

import { Container, FlipCardBack, FlipCardFront } from "./styles"

export function HomePageTemplate({ cards, text }) {
  cards = cards || [1, 2, 3]
  return (
    <main>
      <Container>
        <div>
          {cards.map(card => (
            <FlipCard key={card}>
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
          ))}
        </div>
      </Container>
    </main>
  )
}

export default function pages() {
  return (
    <Layout>
      <HomePageTemplate />
    </Layout>
  )
}
