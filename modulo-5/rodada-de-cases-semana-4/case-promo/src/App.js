import React from "react"
import Router from "./Routes/Router"
import { ContainerApp, GlobalStyle } from "./styled/GlobalStyled"

function App() {
  return (
    <ContainerApp>
      <GlobalStyle/>
      <Router/>
    </ContainerApp>
  )
}

export default App