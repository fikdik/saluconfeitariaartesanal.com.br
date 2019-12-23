import styled from "styled-components"

export const Container = styled.div`
  ${props => props.theme.container}
  > div {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    margin: 0 -1.5rem;
  }
`

export const FlipCardFront = styled.div`
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

export const FlipCardBack = styled.div`
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
    padding: 12px 16px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`
