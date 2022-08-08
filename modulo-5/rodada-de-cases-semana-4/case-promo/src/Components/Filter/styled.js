import styled from "styled-components"

export const FilterContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  background-color: #2D0C5E;
  color: white;
`

export const Title = styled.h1 `
  padding: 40px 0;
  width: 70%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.005em;
  color: white;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;
    padding: 40px 16px;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
  }
`

export const ButtonsContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 40px;
  max-width: 90%;
  gap: 12px;
  `