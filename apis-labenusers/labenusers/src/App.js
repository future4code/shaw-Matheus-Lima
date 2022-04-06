import React from "react";
import Inscricao from "./components/Inscricao";
import { ListaUsuario } from "./components/ListaUsuario";
import styled from "styled-components";
export default class App extends React.Component {
  state = {
    telAtual: "cadastro",
    
  };


  escolherTela = () => {
    switch (this.state.telAtual) {
      case "cadastro":
        return <Inscricao irParaListaUsuarios={this.irParaListaUsuarios}/>;
        
      case "lista":
        return <ListaUsuario irParaCadastro={this.irParaCadastro}/>;
        
      default:
        return <div>Erro Página não encontrada</div>;
    }
  };

  irParaCadastro= () =>{
    this.setState({telAtual:"cadastro"})
  }

  irParaListaUsuarios = () =>{
    this.setState({telAtual:"lista"})
  }

  render() {
    return (
      <div>
          {this.escolherTela()}
      </div>
    );
  }
}
