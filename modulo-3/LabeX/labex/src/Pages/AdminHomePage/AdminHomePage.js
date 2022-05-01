import { Container, TextoCentro } from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { token, useProtectedPage } from "../../constant/constants";
import axios from "axios";
import { url } from "../../constant/constants";
import { CardTrips } from "../ListTripsPage/style";
import Loading from "../../components/Loading";
import { goBack, goToLoginPage } from "../../routes/coordinator";

import {
  goToCreateTripPage,
  goToTripDetailsPage,
} from "../../routes/coordinator";

const AdiminHomePage = () => {
  const navigate = useNavigate();
  const [tripList, setTripList] = useState([]);
  const [loading, setLoading] = useState(false);
  useProtectedPage();

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  // console.log(tripList);

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

  const deleteTrip = async (id) => {
    axios
      .delete(`${url}/trips/${id}`, { headers: { auth: token } })
      .then((res) => {
        console.log(res.data.trips);
        getTrip();
        alert("Viagem Excluída com Sucesso!");
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  // console.log(deleteTrip)
  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips key={trips.id}>
          <h3 onClick={() => goToTripDetailsPage(navigate, trips.id)}>
            {trips.name}
          </h3>

          <button onClick={() => deleteTrip(trips.id)}>Lixeira</button>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <Container>
      <h1>Painel Administrativo</h1>

      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=> goBack(navigate)}>Logout</button>
      <p>Viagens</p>
      {renderList}
    </Container>
  );
};

export default AdiminHomePage;
