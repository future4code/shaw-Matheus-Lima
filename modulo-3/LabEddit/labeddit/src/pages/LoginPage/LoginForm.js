import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInputs, Botao } from "./styled";
import useForm from "../../hooks/useForms";
import { login } from "../../services/user";

const LoginPage = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const Navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, Navigate);
  };

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

        <Botao type={"submit"} fullWidth>
          Login
        </Botao>
      </form>
    </div>
  );
};

export default LoginPage;
