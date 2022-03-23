import React from "react";
import styled from "styled-components";
import Post from "./Components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Daniel"}
          fotoUsuario={"https://picsum.photos/200/300"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Seu Zé"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        
      </MainContainer>
      
      
    );
  }
}



export default App;
