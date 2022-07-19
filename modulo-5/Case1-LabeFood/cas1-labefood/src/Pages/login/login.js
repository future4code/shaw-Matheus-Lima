import React, { useState } from "react";
import { ButtonStyled, DivPassword, Form, Main, InputMaterial } from "./styled";
import axios from "axios";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import {goToFeed} from "../../Routes/coordinator"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [checkerrorPassword, setCheckPassword] = useState(false);
  const [checkErrorEmail, setCheckErrorEmail] = useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const userLogin = {
      email,
      password,
    };


    loginApi(userLogin);
  };
  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail('')
        setPassword('')
        setErrEmail('')
        setErrPassword('')
        setCheckErrorEmail(false)
        setCheckPassword(false)
        localStorage.setItem('token',res.data.token)
        alert(`Boas Vindas ${res.data.user.name}`)
        goToFeed(navigate)
      })
      .catch((error) => {
        if (error.response.data.message.includes("Senha incorreta")) {
          setErrPassword(error.response.data.message);
          setCheckPassword(true);
        }else{
        setErrEmail(error.response.data.message)
        setCheckErrorEmail(true)
        }
        // console.log(error.response.data.message);
        setEmail('')
        setPassword('')
        setErrEmail('')
        setErrPassword('')
        setCheckErrorEmail(false)
        setCheckPassword(false)
      });
  };

  return (
    <Main>
      <p>Entrar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          error={checkErrorEmail}
          helperText={checkErrorEmail ? errEmail : ""}
          id="outlined-basic"
          label="Email"
          type={"email"}
          variant="outlined"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <DivPassword>
          <InputMaterial
            error={checkerrorPassword}
            helperText={checkerrorPassword ? errPassword : ""}
            id="outlined-basic"
            label="Password"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder="Min 6 caracteres"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{
              minlength: "6",
              title: "A senha deve ter no mínimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Login;
