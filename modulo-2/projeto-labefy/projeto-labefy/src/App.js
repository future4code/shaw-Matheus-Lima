import React from "react";
import TelaCriarPlaylist from "./components/TelaCriarPlaylist"
import TelaPlaylist from "./components/TelaPlaylist"

export default class App extends React.Component {
  state = {
    telaAtual: "criarPlaylist"
    
  }


  escolheTela = () => {
    switch (this.state.telaAtual){
      case "criarPlaylist":
        return <TelaCriarPlaylist irParaPlaylist={this.irParaPlaylist}/>
      case "listaPlaylist":
        return <TelaPlaylist criarPlaylist={this.criarPlaylist}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  criarPlaylist = () => {
    this.setState({telaAtual: "criarPlaylist"})
  }

  irParaPlaylist = () => {
    this.setState({telaAtual: "listaPlaylist"})
  }

  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
