import { Container, CardTrips } from "./style";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";
import axios from "axios";
import { url } from "../../constant/constants";
import { useEffect, useState } from "react";
import React from "react";

const ListTripsPage = () => {
  const [tripList, setTripList] = useState([]);
  const navigate = useNavigate();
  
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

  const renderList = tripList ? (
    tripList.map((trips) => {
      return (
        <CardTrips key={trips.id}>
          <h3>{trips.name}</h3>
          <p>{trips.description}</p>
          <p>Planeta: {trips.planet}</p>
          <p>Tempo de viajem: {trips.durationInDays} dias</p>
          <p>Data de Embarque: {trips.date}</p>
        </CardTrips>
      );
    })
  ) : (
    <p>Erro! Sem viagens</p>
  );
  console.log(renderList)
  return (
    <Container>
      <h1>Lista de Viagens</h1>
      <div>{renderList}</div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>
        Inscrever-se
      </button>
    </Container>
  );
};

export default ListTripsPage;
