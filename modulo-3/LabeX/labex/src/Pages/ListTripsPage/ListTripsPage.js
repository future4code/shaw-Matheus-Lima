import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goBack, goToApplicationFormPage } from "../../Routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../Constant/Constant";

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardViagens = styled.div`
  box-shadow: rgb(0 0 0 / 40%) 0px 4px 8px 0px;
`;

const ListTripsPage = () => {
  const [TripsValor, setTrips] = useState([]);
  const navigate = useNavigate();

// atenção na forma de passar a url pois pode não funcionar
const token = localStorage.getItem("token")

useEffect(()=>{
  if(token === null){
    console.log("Você não está logado")
    navigate("/LoginPage")
  }

},[])




  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setTrips(res.data.trips);
        console.log(res.data.trips);
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  console.log(getTrips);



  const tripsList = TripsValor ? TripsValor.map((trips ) => {
    return ( 
      <CardViagens key={trips.id}>
        
        <h3>Nome: {trips.name}</h3>
        <p>Descrição: {trips.description}</p>
        <p>Planeta: {trips.planet}</p>
        <p>Duração em dias: {trips.durationInDays}</p>
        <p>Dia: {trips.date}</p>
      </CardViagens>
      
    );
  }):<span></span>

  useEffect(()=>{
    getTrips()
  },[])

  console.log(tripsList);

  return (
    <MainList>
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>
          Escreva-se
        </button>
      </div>
      <h1>Lista de Viagens</h1>
      <div>{tripsList}</div>
    </MainList>
  );
};

export default ListTripsPage;
