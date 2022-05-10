import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ContainerLogo, ContainerInputs, Botao } from "./styled";
import { goToFeedPage, goSignupPage } from "../../routes/Coordinator";
import useForm from "../../hooks/useForms";
import axios from "axios"
import {Base_URL} from "../../constants/urls"



const LoginPage =  () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
 
  const Navigate = useNavigate();
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    login()
  };

  const login = async () =>{
    try{
      const response = await axios.post(`${Base_URL}/users/login`,form)
      console.log(response)
    }
    catch(err){
      console.log("Erro", err)

    }
  }

  
  return (
 

      <div>
        <form onSubmit={onSubmitForm}>
          <ContainerInputs
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={"E-mail"}
            fullWidth
            required
            type={"email"}
          />

          <ContainerInputs
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Senha"}
            fullWidth
            required
            type={"password"}
          />

          <Botao 
          type={"submit"} fullWidth>
            Login
          </Botao>
        </form>
      </div>

  );
};

export default LoginPage;
