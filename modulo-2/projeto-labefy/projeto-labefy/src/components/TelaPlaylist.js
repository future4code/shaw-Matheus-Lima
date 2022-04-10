import React from "react";
import axios from "axios";
import Styled from "styled-components";
import TelaMusicas from "./TelaMusicas"

const CardCentral = Styled.div`
display: flex;
flex-direction: column;
align-items:center;
flex-flow: wrap;


`;

const ContainerInformacoes = Styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 0;
  box-shadow: 3px 3px 4px 2px grey;
  border-radius: 10px;
  align-items:center;

  
`;

export default class TelaListalistaPlaylist extends React.Component {
  state = {
    listaPlaylists: [],
    detalhesPlaylist: false,
  };

  // função para pegar as playlists
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

  // função de detalhes das playlist
  getPlaylistTracks = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";
    axios
      .get(url, {
        headers: {
          Authorization: "matheus-moura-shaw",
        },
      })
      .then((response) => {
        this.setState({ listaPlaylists: response.data });
      })
      .catch((err) => {
        alert("Usuário Não encontrado!");
      });
  };

  addTracksToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`;
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "matheus-moura-shaw",
        },
      })
      .then((response) => {
        this.setState({ listaPlaylists: response.data });
      })
      .catch((err) => {
        alert("Erro Ao Adicionar a Playlist");
      });
  };

  componentDidMount() {
    this.getAllPlaylists();
  }
  //função de deletar playlist pela id
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

  // função que ainda tenho que fazer de dar detalhes aos cards quando clicado
  detalhesPlaylist = () => {
    this.setState({
      detalhesPlaylist: true});
  };

  fecharDetalhes = () => {
    this.setState({ detalhesPlaylist: false });
  };

  render() {
    // console.log(this.state.listaPlaylists);
    //map passando as list ade usuários para os cards
    const playListas = this.state.listaPlaylists.map((lista) => {
      return (
        <ContainerInformacoes key={lista.id}>
          <h3 onClick={this.detalhesPlaylist}>{lista.name}</h3>

          <button onClick={() => this.deletarUsuario(lista.id)}>X</button>
        </ContainerInformacoes>
      );
    });
    console.log(this.detalhesPlaylist);

    return (
      <CardCentral>
        <button onClick={this.props.criarPlaylist}>
          Ir Para Criar Playlist
        </button>
        {this.state.detalhesPlaylist &&
        (<TelaMusicas fecharDetalhes={this.fecharDetalhes}/>)}
        
        
        
        
        
        
        <h2>Lista de Playlists</h2>


        

        {playListas}
      </CardCentral>
    );
  }
}

