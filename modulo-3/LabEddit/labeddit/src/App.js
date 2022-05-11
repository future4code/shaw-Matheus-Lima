import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ContainerHeader } from "./components/Headers/styled";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

// tirando o browser router para poder passar por props o container header até chegar no user para ele fazer a troca de login para logout
export default App;
