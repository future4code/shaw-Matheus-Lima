import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../Constant/Constant";
import {goBack} from "../../Routes/coordinator"
import useProtectPage from "../../Hooks/UseProtectPage";
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
const token = localStorage.getItem("token")

useProtectPage()


const getTripDetalis= () =>{
  axios.get(`${BASE_URL}/trip/id`,{
    headers:{
    auth:token
  }})
  .then((res)=>{
    console.log(res.data)
    
  })
  .catch((err)=>{
    console.log(err.res)

  })

}

useEffect(()=>{
  getTripDetalis()
},[])


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
