import React from "react";
import Styled from "styled-components";
import axios from "axios";

const Fundo = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(120, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ContainerInfo = Styled.div`
display: flex;
flex-direction:column;
position: fixed;
top:0;
padding: 20px;


`;


class PageMusicas extends React.Component {
  state = {
    tracks: [],

    inputNome: "",
    inputArtista: "",
    inputUrl: "",
  };

  inseirNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  inseirArtista = (event) => {
    this.setState({ inputArtista: event.target.value });
  };
  inseirUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  componentDidMount = () => {
    this.getPlaylistTracks();
  };

  getPlaylistTracks = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;

    axios
      .get(url, {
        headers: {
          Authorization: "matheus-moura-shaw",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  addTrackToPlaylist = (playlistId) => {
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputUrl,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        {
          headers: {
            Authorization: "matheus-moura-shaw",
          },
        }
      )
      .then((res) => {
        alert("Sua música foi adicionada com sucesso!");
        this.props.pegarMusicasPlaylists(
          playlistId,
          this.props.getPlaylistTracks.nome
        );
        this.setState({ inputNome: "" });
        this.setState({ inputArtista: "" });
        this.setState({ inputUrl: "" });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  render() {
    const alltracks = this.state.tracks.map((cada) => {
      return (
        <div
          key={() => {
            this.getPlaylistTracks(cada.id);
          }}
        >
          {cada.name}
        </div>
      );
    });
    return (
      <Fundo>
        <ContainerInfo>
          <button onClick={this.props.fecharDetalhes}>X</button>
          <div>
            <input placeholder={"Música"} />
            <input placeholder={"Artista"} />
            <input placeholder={"Url"} />
          </div>
          <button>Adicionar</button>
          <div>
            <h2>Estilo Musical</h2>
          </div>
          <div>
            <h4>Músicas</h4>
            {alltracks}
          </div>
        </ContainerInfo>
      </Fundo>
    );
  }
}

export default PageMusicas;
