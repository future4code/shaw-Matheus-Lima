import { Container,TextoCentro } from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { token, useProtectedPage } from "../../constant/constants";
import axios from "axios";
import { url } from "../../constant/constants";
import { CardTrips } from "../ListTripsPage/style";
import Loading from "../../components/Loading"
import { goToLoginPage } from "../../routes/coordinator";

import {
  goToCreateTripPage,
  goToTripDetailsPage,
} from "../../routes/coordinator";


const AdiminHomePage = () => {
  const navigate = useNavigate();
  const [tripList, setTripList] = useState([])
  const [loading, setLoading] = useState(false)
  useProtectedPage()


  // const handleLogOut = () => {
  //   window.localStorage.removeItem('token')
  //   goToLoginPage(navigate)
  // }

console.log(tripList)

  const getTrip = () => {
 
    axios
      .get(`${url}/trips`)
      .then((response) => {
        setTripList(response.data.trips);
      })
      .catch((err) => {
        alert("Erro!", err);
      });
  };



  useEffect(() => {
    getTrip();
  }, []);

  // console.log(deleteTrip)
const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips key={trips.id}>
         
          <h3 onClick={() => goToTripDetailsPage(navigate,trips.id)}>{trips.name}</h3>
        
          <button  onClick={() => deleteTrip(trips.id)}          
            >Lixeira</button>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );
  const deleteTrip = async (id) => {

    try {
      const response = await url.delete(`trips/${id}`, {
        headers: {
          auth: token
        }
      })
      console.log(response.data.trips);
      alert('Viagem excluída com sucesso!')
      getTrip()

    } catch (error) {
      console.log(error.response)
      alert('Erro no delete')

    }
  }
  



  return (
    <Container>
      <h1>Painel Administrativo</h1>
      
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      {/* <button onClick={()=> handleLogOut()}>Logout</button> */}
      <p>Viagens</p>
      {renderList}
      <button onClick={()=> deleteTrip()}>Lixeira</button>
    </Container>
  );
};

export default AdiminHomePage;
