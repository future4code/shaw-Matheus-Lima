import React from "react";
import { ContainerLogo, ContainerInputs, Botao } from "./styled";
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom";
import {goSignupPage} from "../../routes/Coordinator"



const LoginPage = () => {
  const Navigate = useNavigate()
 
  return (
    <div>
      <ContainerLogo src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" />
      <LoginForm/>
     
      <Botao onClick={()=> goSignupPage(Navigate)} type={"submit"}>Cadastrar</Botao>
    </div>
  );
};

export default LoginPage;
