import axios from "axios";
import React from "react";
import useForm from "../../Hooks/useForm";
import { InputMaterial } from "../signUp/styled";
import { ButtonStyled, Main } from "./styled";
import {BASE_URL} from "../../Constants/url"
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";

const SignUpAdress = () => {

    const {form,onChange,clean} = useForm(
        {
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate()

  const onSubmitFormAdress = (event) => {
    event.preventDefault();
    addAdress()
  };
  
  
  const addAdress = async()=>{
    const token = localStorage.getItem('token')
    await axios.put(`${BASE_URL}/address`,form,{
      headers:{
        auth:token
      }
    })
    .then((res)=>{
      localStorage.setItem('token',res.data.token)
      goToFeed(navigate)
    })
    .catch((err)=>{
      console.log(err.response)
      
    })
  }

  return (
    <Main>
      <p>SignUpAdress</p>
      <form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logadouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Numero"}
          name="number"
          type={'number'}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apto/Bloco"}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />
        <ButtonStyled type="submit">Salvar</ButtonStyled>
      </form>
    </Main>
  );
};

export default SignUpAdress;
