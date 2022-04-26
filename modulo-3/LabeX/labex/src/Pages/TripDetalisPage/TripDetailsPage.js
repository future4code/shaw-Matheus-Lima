import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {goBack} from "../../Routes/coordinator"

const MainTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  justify-content: center;
`;

const CardTrip = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  width: 460px;
`;



//para administrador ver o detalhe da viagem


const TripDetailsPage = () => {

const navigate = useNavigate()




  return (
    <MainTrip>
      <h1>Detalhe de Viagem</h1>
      
      
      <CardTrip>
          
          
          asouhdaousdha
          
          
          </CardTrip>
          <button onClick={()=> goBack(navigate)}>Voltar</button>
    </MainTrip>
  );
};

export default TripDetailsPage;
