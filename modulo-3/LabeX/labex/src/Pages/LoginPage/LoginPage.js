import { Container, Header, Logo, I, Title, Inputs, Img } from "./style";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/coordinator";
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../constant/constants";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(`${url}/login`, body)
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/Area-Adiministrador");
      })
      .catch((err) => {
        alert("Senha ou Usuario não cadastrados!", err.response);
      });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitLogin();
  };

  return (
    <div>
      <Header>
        <Logo />
        <Title onClick={() => goBack(navigate)}>
          Labe
          <span>
            {" "}
            <I>X</I>
          </span>{" "}
          Viagens
        </Title>
      </Header>
      <Img />
      <Container>
        <div></div>
        <div>
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <Inputs
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={onChangeEmail}
              required
            />
            <Inputs
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={onChangeSenha}
              required
              pattern={"^.{5,}"}
              title={"Senha deve conter mais de 8 digitos"}
            />
            <button>Entrar</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
