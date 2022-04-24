import React, { useState} from "react";
import TelaMatch from "./components/TelaMatchs/TelaMatch";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import { ContainerCardApp } from "./StyledApp";
import Home from "./assets/Home.jpg";
import Astronauta from "./assets/Astronauta.jpg";
const App = () => {
  // função para trocar para página de matches

  const [trocaPagina, setTrocaPagina] = useState("Tela Inicial");

  const renderizaPagina = () => {
    if (trocaPagina === "Tela Inicial") {
      return <TelaInicial />;
    } else {
      return <TelaMatch />;
    }
  };

  // console.log(renderizaPagina,"foi chamado")

  const mudaPagina = (mudaPagina) => {
    setTrocaPagina(mudaPagina);
  };

  return (
    <ContainerCardApp>
      {trocaPagina === "Tela Inicial" ? (
        <button onClick={() => mudaPagina("Tela Matches")}>
          <img
            src={Astronauta}
            width={"70px"}
            height={"50px"}
            alt="Lista Matches"
          />
        </button>
      ) : (
        <button onClick={() => mudaPagina("Tela Inicial")}>
          <img src={Home} width={"70px"} height={"60px"} alt="Voltar Home" />
        </button>
      )}
      <TelaInicial />
      {renderizaPagina()}
    </ContainerCardApp>
  );
};
export default App;
