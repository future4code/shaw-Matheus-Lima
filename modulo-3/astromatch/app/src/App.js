import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TelaMatch from "./components/TelaMatch"
import TelaInicial from "./components/TelaInicial"


const App = () => {
  // função para trocar para página de matches
  const [trocaPagina, setTrocaPagina] = useState("")
  
  
  
 


  const renderizaPagina = () =>{
    if(trocaPagina === "0"){
      return <TelaMatch/>
    }
    else{
      return <App/>
    }
}

const mudaPagina = () =>{
  setTrocaPagina(mudaPagina)
}

 
  return (
<div>

<TelaInicial/>

</div>

  );
};
export default App;
