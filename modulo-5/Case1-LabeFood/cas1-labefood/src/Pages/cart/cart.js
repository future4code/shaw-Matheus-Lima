  import React ,{ useState } from "react";

import {BASE_URL} from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { AddressTitle, ButtonCart, CartConfig, CartInfo, ContainerCart, EmptyCar, EmptyCart, Form, Freight, InfoProfile, InfoRestaurant, Main, MainCart, NameRestaurant, PaymentTitle, Total, TotalContainer } from "./styled";
import useProtectedPage from "../../Hooks/useProtectedPage";
import CardHeader from "../../Components/Header/Header";
import CardCart from "../../Components/CardCart/CardCart";
import { Radio } from "@mui/material";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  useProtectedPage()

  const [payment, setPayment] = useState([]);
   const [paymentMethod, setPaymentMethod] = useState ({
       'money': false,
       'creditcard': false
  })

  const profile = useRequestData({}, `${BASE_URL}/profile`);

  const mockData = [
    {
      name: "Teste",
      price: 40,
      photoUrl:
        "https://i.pinimg.com/474x/0a/4a/a2/0a4aa225cc2d45c839377955015bff38.jpg",
      amount: 2,
      description: "Pão, carne, queijo, alface, presunto, bacon e molho",
    },
  ];
  const onChangePayment = (event)=> {
      const newCheck = {...paymentMethod}
      newCheck[event.target.name] = event.target.checked

      const result = Object.keys(newCheck).filter((pay)=>{
          if(newCheck[pay]){
              return [pay, ...payment]
          }
      })
      setPayment(result)
      setPaymentMethod(newCheck)
  }

  
  console.log(profile[0].user);

  return (
    <ContainerCart>
      <CardHeader title={"Meu Carrinho"} />
      <CartConfig>
        <InfoProfile>
          <AddressTitle>Endereço de entrega</AddressTitle>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>
        <MainCart>
          <div>
            {mockData.length > 0 ? (
              mockData.map((data) => {
                return (
                  <div>
                    <InfoRestaurant>
                      <NameRestaurant>Nome Restaurante</NameRestaurant>
                      <p>Rua restaurante</p>
                      <p> 30-45 min</p>
                    </InfoRestaurant>
                    <CardCart
                      name={data.name}
                      price={data.price}
                      photoUrl={data.photoUrl}
                      amount={data.amount}
                      description={data.description}
                    />
                  </div>
                );
              })
            ) : (
              <EmptyCart>Carrinho Vazio</EmptyCart>
            )}
          </div>

          <div>
            <Freight>Frete $00,00</Freight>
            <TotalContainer>
              <b>SUBTOTAL</b>
              <Total>$00,00</Total>
            </TotalContainer>
          </div>
          <PaymentTitle>
            <p>Forma de pagamento</p>
          </PaymentTitle>
          <hr />

          <Form>
            <Radio type="checkbox" id="vehicle1" value="bike" />
            <label>Dinheiro</label>
          </Form>
          <Form>
            <Radio type="checkbox" id="vehicle1" value="bike" />
            <label>Cartão de crédito</label>
          </Form>
          <ButtonCart>Confirmar</ButtonCart>
        </MainCart>
      </CartConfig>
      <Footer page="cart" />
    </ContainerCart>
  );
};

export default Cart;
