import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TelaMatch from "./components/TelaMatchs/TelaMatch"
import TelaInicial from "./components/TelaInicial/TelaInicial";
import {ContainerCardApp} from "./StyledApp" 
import Home from "./assets/Home.jpg"
import Astronauta from "./assets/Astronauta.jpg"
const App = () => {
  // função para trocar para página de matches

  const [trocaPagina, setTrocaPagina] = useState("")
  
  
  
 


  const renderizaPagina = () =>{
    if(trocaPagina === "0"){
      return <TelaMatch/>
    }
    else{
      return <TelaInicial/>
    }
}


const mudaPagina = (mudaPagina) =>{
  setTrocaPagina(mudaPagina)
}
console.log(mudaPagina)

 
  return (
<ContainerCardApp>
  
  {!trocaPagina ? (
            <button onClick={() => mudaPagina("0")}>
              <img src={Astronauta} width={"70px"} height={"50px"} alt="Ver matches" />
            </button>
          ) : (
            <button onClick={() => mudaPagina()}>
              <img src={Home} width={"70px"} height={"60px"} alt="Voltar Início" />
            </button>
          )} 
<TelaInicial/>

</ContainerCardApp>

  );
};
export default App;
