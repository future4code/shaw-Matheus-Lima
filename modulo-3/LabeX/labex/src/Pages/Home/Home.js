import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToListTripsPage } from "../../Routes/coordinator";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Botoes = styled.div`
  display: flex;
  display: block;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Botoes>
        <h2>LabeX</h2>
        <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
        <button onClick={() => goToLoginPage(navigate)}>Area Admin</button>
      </Botoes>
    </Main>
  );
};

export default Home;
