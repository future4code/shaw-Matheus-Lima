import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default class TelaListalistaPlaylist extends React.Component {
  state = {
    listaPlaylists: [],
  };
//   componentDidMount() {
//     this.getAllPlaylists();
//   }

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, {
        headers: {
          Authorization: "matheus-moura-shaw",
        },
      })
      .then((response) => {
        this.setState({ listaPlaylists: response.data.result.list });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente");
      });
    //listaPlaylists =  meu state
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "matheus-moura-shaw",
        },
      })
      .then((res) => {
        alert("Deseja Deletar essa Playlist?");
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    console.log(this.state.listaPlaylists);

    const playListas = this.state.listaPlaylists.map((lista) => {
      return (
      <div>
          
          {lista.name}
          <button onClick={() => this.deletarUsuario(lista.id)}>X</button>
        </div>
      );
    });
    // console.log(playListas)

    return (
      <div>
        <button onClick={this.props.criarPlaylist}>
          Ir Para Criar Playlist
        </button>
        <h2>Lista de Usuários</h2>
        {playListas}
      </div>
    );
  }
}
