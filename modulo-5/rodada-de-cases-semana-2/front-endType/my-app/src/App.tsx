import React from "react";
import CardHeader from "./components/Header/CardHeader";
import styled from "styled-components";
import MainCard from "./components/Main/MainCard";

const AppZerado = styled.div`
width: 100vw; 
  height: 100vh; 
  margin: -8px; 
  padding: 0px;
  box-sizing: border-box; 
  `

const App = () => {
  return (
    <AppZerado>
      <CardHeader/>
      <MainCard/>
    </AppZerado>
  );
}

export default App;
