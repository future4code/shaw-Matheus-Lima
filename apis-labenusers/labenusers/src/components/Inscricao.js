import React from "react";
import axios from "axios";

export default class Inscricao extends React.Component {
  state = {
    name: "",
    email: "",
  };

  onChangeName = (event) => {
    const novoUsuario = event.target.value;
    this.setState({ name: novoUsuario });
  };

  onChangeEmail = (event) => {
    const novoEmail = event.target.value;
    this.setState({ email: novoEmail });
  };

  createUser = () => {
      const header = {
          headers:{
            Authorization:"matheus-moura-shaw"
          }
      }
    const body = {
      name: this.state.name, 
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        header      
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <label>
          <button>Trocar de Tela</button>
          <input
            placeholder="Nome"

            type={"text"}

            value={this.state.name}

            onChange={this.onChangeName}
          />

          <input placeholder="E-mail" 
          
          type={"email"}

          value={this.state.email}

          onChange={this.onChangeEmail}

          />
          <button onClick={this.createUser}>Criar Usuário</button>
          
        </label>
      </div>
    );
  }
}
