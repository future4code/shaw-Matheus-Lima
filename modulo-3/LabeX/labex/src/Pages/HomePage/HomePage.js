import { Button, Header,  Title, I,  TextHome, PHome, DivHome} from "./style";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage, goToHomePage} from "../../routes/coordinator";


import React from "react";

const HomePage = ()=> {
  const navigate = useNavigate()
 
    return (
      <div>
       <Header>
       <Title>Labe<span> <I>X</I></span> Viagens</Title>
       <button onClick={() => goToLoginPage(navigate)}>Área Admin</button>
       </Header>
       <DivHome>
       <PHome>Existem 23 planetas SUPER-HABTAVEIS no nosso universo , nós te levamos até eles na velociadade da luz.</PHome>
       </DivHome>
       <TextHome>
       <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
       <p> Realize seu sonho de conhecer o desconhecido!<br/>Vá ao espaço com Labe <I>X</I>.</p>
       </TextHome>
      
      </div>
    );
  }
  
  export default HomePage
