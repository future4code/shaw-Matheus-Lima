import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  goToTripDetailsPage1,
  goBack,
} from "../../Routes/coordinator";
const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInput = styled.label`
  display: flex;
  flex-direction: column;
`;

const ContainerBotao = styled.div`
  display: flex;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <MainLogin>
      <h3>Login</h3>
      <ContainerInput>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha" type={"password"}></input>
      </ContainerInput>

      <ContainerBotao>
        <button onClick={() => goToTripDetailsPage1(navigate)}>Login</button>{" "}
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </ContainerBotao>
    </MainLogin>
  );
};

export default LoginPage;
