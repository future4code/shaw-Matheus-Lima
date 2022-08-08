import styled from "styled-components"

export const HomeContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 20px 160px;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    padding: 20px 12px;
    gap: 16px;
  }
`