import React from "react";
import useForm from "../../hooks/useForms";
import { Botao, ContainerInputs } from "../LoginPage/styled";

const SignUpForm = () => {
  const [form, onChange, Clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (<div>

            <form onSubmit={onSubmitForm}>
                <ContainerInputs
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeHolder={"Nome"}
                fullWidth
                required
                type={"text"}/>
                
                <ContainerInputs
                name={"email"}
                value={form.email}
                onChange={onChange}
                placeHolder={"E-mail"}
                fullWidth
                required
                type={"email"}/>
                 
                 <ContainerInputs
                name={"password"}
                value={form.password}
                onChange={onChange}
                placeHolder={"Senha"}
                fullWidth
                required
                type={"password"}/>
            
                <Botao type={"submit"}>Cadastrar</Botao>



            </form>

  </div>);
};

export default SignUpForm;
