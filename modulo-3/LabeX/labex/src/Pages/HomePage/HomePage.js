import { Button, Header,  Title, I,  TextHome, PHome, DivHome} from "./style";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage, goToHomePage} from "../../routes/coordinator";


import React from "react";

const HomePage = ()=> {
  const navigate = useNavigate()
 
    return (
      <div>
       <Header>
       <Title>Labe<span> <I>X</I></span></Title>
       <button onClick={() => goToLoginPage(navigate)}>Área Admin</button>
       </Header>
       <DivHome>
       <PHome/>
       </DivHome>
       <TextHome>
       <Button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</Button>
       <p> Rumo ao desconhecido!<br/>Excelsior <I>X</I>.</p>
       </TextHome>
      
      </div>
    );
  }
  
  export default HomePage
