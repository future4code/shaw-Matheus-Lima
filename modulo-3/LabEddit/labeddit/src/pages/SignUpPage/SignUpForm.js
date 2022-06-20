import React from "react";
import useForm from "../../hooks/useForms";
import { Botao, ContainerInputs } from "../LoginPage/styled";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <ContainerInputs
          name={"username"}
          value={form.username}
          onChange={onChange}
          placeHolder={"Nome"}
          fullWidth
          required
          type={"text"}
        />

        <ContainerInputs
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeHolder={"E-mail"}
          fullWidth
          required
          type={"email"}
        />

        <ContainerInputs
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeHolder={"Senha"}
          fullWidth
          required
          type={"password"}
        />

        <Botao type={"submit"}>Cadastrar</Botao>
      </form>
    </div>
  );
};

export default SignUpForm;
