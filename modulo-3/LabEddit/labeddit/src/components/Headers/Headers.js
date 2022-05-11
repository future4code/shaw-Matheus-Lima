import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./styled";
import { goBack, goToLoginPage } from "../../routes/Coordinator";
import logolabenu from "../../assets/logolabenu.png";
import { Logo } from "./styled";
import { LogOut } from "./styled";

//destruturação os estados passados pelo app diretamente para não ter que ficar escrevendo props. em tudo 
const Headers = () => {
   const token = localStorage.getItem("token");
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login");
  const navigate = useNavigate();

 
  const logoutButton = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logoutButton();
      setRightButton("Login")
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <div>
      <ContainerHeader>
        <Logo src={logolabenu} height={"34px"} />
        <LogOut onClick={rightButtonAction}>{rightButton}</LogOut>
      </ContainerHeader>
    </div>
  );
};

export default Headers;
