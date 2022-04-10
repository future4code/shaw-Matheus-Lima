import axios from "axios";
import React from "react";
import TelaListalistaPlaylist from "./TelaPlaylist";


class DetalhesUsuario extends React.Component {
  state = {
    detalhes: {},
    edicao: false,
    inputNome: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.getUserById();
  }

  getUserById = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.usuarioId}`;

    const headers = {
      headers: {
        Authorization: "murilo-terenciani-silveira"
      }
    };

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          detalhes: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  habilitarEdicao = () => {
    this.setState({
      edicao: !this.state.edicao
    });
  };

  editUser = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.usuarioId}`;

    const headers = {
      headers: {
        Authorization: "murilo-terenciani-silveira"
      }
    };

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    axios
      .put(url, body, headers)
      .then((res) => {
        alert(`Detalhes do usuário foram alterados.`);
        this.getUserById();
        this.setState({
          inputNome: "",
          inputEmail: "",
          edicao: !this.state.edicao
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  onChangeInputNome = (event) => {
    this.setState({
      inputNome: event.target.value
    });
  };
  onChangeInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    });
  };

  render() {
    const secaoEdicao =
      this.state.edicao === false ? (
        <Button onClick={this.habilitarEdicao}>Editar Usuário</Button>
      ) : (
        <ContainerEdicao>
          <p>Editar Usuário</p>
          <Input
            placeholder="Nome"
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
          <Input
            placeholder="E-mail"
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
          />
          <Button onClick={this.editUser}>Salvar</Button>
        </ContainerEdicao>
      );
      

    return (
      <div>
        <ContainerInformacoes>
          <h3>Detalhes do Usuário</h3>
          <ContainerNomeEmail>
            <p>
              <b>Nome:</b> {this.state.detalhes.name}
            </p>
            <p>
              <b>Email:</b> {this.state.detalhes.email}
            </p>
          </ContainerNomeEmail>
        </ContainerInformacoes>
        <BotaoRemover
        onClick={() => this.props.deletarUsuario(this.state.detalhes)}
        >
          Deletar Usuário
        </BotaoRemover>
        {secaoEdicao}
        <hr />
        <Button onClick={this.props.voltarParaLista}>Voltar para lista</Button>
      </div>
    );
  }
}

export default DetalhesUsuario;
