import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { token, useProtectedPage } from "../../constant/constants";
import axios from "axios";
import { url } from "../../constant/constants";
import { CardTrips } from "../ListTripsPage/style";

import {
  goToCreateTripPage,
  goToTripDetailsPage,
} from "../../routes/coordinator";


const AdiminHomePage = () => {
  const navigate = useNavigate();
  const [tripList, setTripList] = useState([])
  const [idLixeira, setIdLixeira] = useState("")
  useProtectedPage()


  const getTrip = () => {
    axios
      .get(`${url}/trips`)
      .then((res) => {
        setTripList(res.data.trips);
      })
      .catch((err) => {
        alert("Erro!", err);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);
  const deleteTrip = () =>{
    axios
    .delete(`${url}/trips/${idLixeira}`,{headers:{auth:token}})
    .then(()=>{
      setIdLixeira([])
      
    })
    .catch((err)=>{
      console.log(err.res)

    })
  }

console.log(idLixeira)

  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips key={trips.id}>
          <h3 onClick={() => goToTripDetailsPage(navigate)}>{trips.name}</h3>
          <button value={trips.id}>Delete{() =>deleteTrip()}</button>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  console.log(renderList)



  return (
    <Container>
      <h1>Painel Administrativo</h1>
      
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button>Logout</button>
      <p>Viagens{renderList}</p>
      <button onClick={()=> deleteTrip()}>Lixeira</button>
    </Container>
  );
};

export default AdiminHomePage;
