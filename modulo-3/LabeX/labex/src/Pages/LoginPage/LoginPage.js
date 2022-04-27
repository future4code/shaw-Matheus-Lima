import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../Constant/Constant";
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

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const onChangePassword = (event) =>{
    setPassword(event.target.value)
  }

  const onSubmitLogin = () =>{
    console.log(email,password)
    const body = {
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}/login`,body)
    .then((res)=>{
      console.log("Sucesso:",res.data.token)
      localStorage.setItem("token",res.data.token)
      navigate("/AdminHomePage")
    })
    .catch((err)=>{
      console.log("Erro tente Novamente:",err.res)
    })
    
  }


  return (
    <MainLogin>
      <h3>Login</h3>
      <ContainerInput>
        <input  placeholder="E-mail" type={"email"} onChange={onChangeEmail} value={email}></input>
        <input placeholder="Senha" type={"password"} onChange={onChangePassword} value={password}></input>
      </ContainerInput>

      <ContainerBotao>
        <button onClick={onSubmitLogin}>Login</button>{" "}
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </ContainerBotao>
    </MainLogin>
  );
};

export default LoginPage;
