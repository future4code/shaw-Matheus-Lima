import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Router from "./Routes/Router";



const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

document.title = "LabeX Viagens";
export default App;
