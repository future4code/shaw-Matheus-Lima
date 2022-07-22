import React from "react";
import Router from "./Routes/Router";
import {ThemeProvider} from '@emotion/react'
import Theme from "./Constants/theme";
import { GlobalStyled } from "./GlobalStyled";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
