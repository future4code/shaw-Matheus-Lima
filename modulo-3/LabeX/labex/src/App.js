import { Router} from "./routes/Router";
import React from "react";
import styled from "styled-components"

const Container = styled.div`
margin: auto;
`
const App = ()=> {
  document.title = "LabeX Viagens"

  // const navigate = useNavigate();
  
  // useProtectedPage = () => {
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  
  //     if (token === null) {
  //       alert("Usuario não logado. Faça seu login para continuar!")
  //       navigate("/Login");
  //     }
  //   }, []);
  
  // }
  
  return (
    <Container>
      <Router/>
    </Container>
  );
}

export default App;
