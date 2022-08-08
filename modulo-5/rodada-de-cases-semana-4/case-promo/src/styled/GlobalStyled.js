import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const ContainerApp = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  font-family: 'Roboto';
  background: #ececec;
`