import React from "react"
import styled from "styled-components"
import { typography } from "styled-system"
import SmartLink from "../../SmartLink"

export default function Signature(props) {
  const thisYear = new Date().getFullYear()
  return (
    <Container {...props}>
      © Copyright 2013 - {thisYear} desenvolvido por
      <SmartLink href="https://fikdik.com.br">
        <small>#</small>
        fikdik
      </SmartLink>
    </Container>
  )
}

const Container = styled.div`
  background-color: #000;
  color: #ddd;
  text-align: center;
  padding: 0.75rem;
  ${typography}

  a {
    color: #dd922c;
    display: inline-block;
    margin-left: 0.5rem;
    transition: transform ease 150ms;
    &:hover {
      transform: scale(1.2);
    }
    small {
      color: #a31216;
    }
  }
`
