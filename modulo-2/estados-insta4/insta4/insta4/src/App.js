import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    id: 0,
    fotoPost: "",
    fotoUsuario: "",
    nomeUsuario: "",
    postagem: [
      {
        id: "1",
        fotoUsuario: "https://picsum.photos/50/50",
        nomeUsuario: "Paulinha",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        id: "2",
        fotoUsuario: "https://picsum.photos/50/50",
        nomeUsuario: "Sabrina",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        id: "3",
        fotoUsuario: "https://picsum.photos/50/50",
        nomeUsuario: "Seu Zé",
        fotoPost: "https://picsum.photos/200/150",
      },
    ],
  };

  render() {
    const renderizaNaTela = this.state.postagem.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          fotoUsuario={post.fotoUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return <MainContainer>
      {renderizaNaTela}
      
    </MainContainer>;
  }
}

export default App;
