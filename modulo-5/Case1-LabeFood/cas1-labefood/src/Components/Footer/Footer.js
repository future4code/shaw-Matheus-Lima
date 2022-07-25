import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../Assets/ImgFooter/avatar.png";
import avatarcor from "../../Assets/ImgFooter/avatarcor.png";
import casa from "../../Assets/ImgFooter/casa.png";
import casacor from "../../Assets/ImgFooter/casacor.png";
import carrinho from "../../Assets/ImgFooter/carrinho.png";
import carrinhocor from "../../Assets/ImgFooter/carrinhocor.png";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator";
import { ContainerFooter, ImageFooter } from "./styled";

const Footer = (props) => {
  const navigate = useNavigate()

  return (
    <ContainerFooter>
      <IconButton title={"Página Principal"} onClick={() => goToFeed(navigate)} aria-label='home'>
        <ImageFooter src={props.page === 'home' ? casa : casacor} alt={"imagem de casa, representando a página principal"} />
      </IconButton>

      <IconButton title={"Carrinho"} onClick={() => goToCart(navigate)} aria-label="cart">
        <ImageFooter src={props.page === 'cart' ? carrinhocor : carrinho} alt={"imagem ilustrativa do carrinho de compras"} />
      </IconButton>

      <IconButton title={"Perfil"} onClick={() => goToProfile(navigate)} aria-label="profile">
        <ImageFooter src={props.page === 'profile' ? avatar : avatarcor} alt={"Imagem ilustrativa representando o perfil"} />
      </IconButton>
    </ContainerFooter>
  );
};

export default Footer