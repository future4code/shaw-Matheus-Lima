import React from "react";
import "./App.css";
import Etapa1 from "./Components/Etape1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Etapa4 from "./Components/Etapa4";
import  { Botao,DivPai } from "./Components/Styled";

export default class App extends React.Component {
  state = {
    pagina: 1,
  };

  proximaEtapa = () => {
    this.setState({ pagina: this.state.pagina +1 })
  }

  render() {
    let paginaAtual;
    switch (this.state.pagina) {
      case 1:
        paginaAtual = <Etapa1 />;
        break;
      case 2:
        paginaAtual = <Etapa2 />;
        break;
      case 3:
        paginaAtual = <Etapa3 />;
        break;
      default:
        paginaAtual = <Etapa4 />;

    }

    return (
      <DivPai>
        {paginaAtual}
        
        <br/>
        <br/>
        <Botao onClick={this.proximaEtapa}>Proxima Etapa</Botao>



      </DivPai>
    );
  }
}
