import React from "react";
import Router from "./Routes/Router";
import {ThemeProvider} from '@emotion/react'
import Theme from "./Constants/theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
