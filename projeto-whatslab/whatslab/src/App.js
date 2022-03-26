// import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import {Chat,Titulo,InputNome,DivPai,InputMensagem,Mensagem} from "./Components/Chat";
class App extends React.Component {
  state = {
    mensagem: [
    
     
    ],

    valorInputUsuario: "",
    valorInputchat: "",
  };

  novoUsuario = () => {
    const novaUsuario = {
      usuario: this.state.valorInputUsuario,

      chat: this.state.valorInputchat,
      
    };

    const novomensagem = [...this.state.mensagem, novaUsuario];

    this.setState({ mensagem: novomensagem });
    this.setState({valorInputchat:""})
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputchat = (event) => {
    this.setState({ valorInputchat: event.target.value });
  };

  render() {
    const logMensagens = this.state.mensagem.map((props) => {
      return (
        <p>
          {props.usuario}:  {props.chat}
        </p>
      );
    });

    return (
      <DivPai>
      <Chat>
        <Titulo>WhatsLab</Titulo>
        <div>
        <Mensagem>{logMensagens}</Mensagem>
          <InputNome
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usúario"}
          />
          <InputMensagem 
            value={this.state.valorInputchat}
            onChange={this.onChangeInputchat}
            placeholder={"Chat"}
          />
          <button onClick={this.novoUsuario}>Enviar!!</button>
        </div>
        
      </Chat>
      </DivPai>
    );
  }
}

export default App;
