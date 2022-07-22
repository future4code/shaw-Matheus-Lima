import React from "react";

import {BASE_URL} from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData";
import { CartConfig, CartInfo, EmptyCar, EmptyCart, InfoProfile, Main, MainCart } from "./styled";



const Cart = () => {
    
    const profile = useRequestData({},`${BASE_URL}/profile`)
    console.log(profile[0].user)

    
    
  return (
    <Main>
      <MainCart>
        <p>Meu carrinho</p>
      </MainCart>
      <CartConfig>
        <InfoProfile>
          <p>Endereço de Entrega</p>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>
        <EmptyCart>
          <p>Carrinho vazio </p>
        </EmptyCart>
        <div>
          <p>Frete R$ 0,00</p>
          <div>
            <p>SubTotal</p>
            <p>R$ 00,00</p>
          </div>
          <h1>Forma de Pagamento</h1>
          <form>
            <label>Dinheiro</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label>Cartão de Crédito</label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <button>Confirmar</button>
          </form>
        </div>
      </CartConfig>
    </Main>
  );
};

export default Cart;
