import React from "react";
import Router from "./Routes/Router";
import {ThemeProvider} from '@emotion/react'
import Theme from "./Constants/theme";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./Context/Global/GlobalState";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyled/>
      <GlobalState>
      <Router/>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
