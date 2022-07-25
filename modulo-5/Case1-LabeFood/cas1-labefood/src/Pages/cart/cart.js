import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import useProtectedPage from "../../Hooks/useProtectedPage";
import  useRequestData  from "../../Hooks/useRequestData";
import {BASE_URL} from "../../Constants/url";
import axios from "axios";
import { Radio } from "@mui/material";
import CardCart from "../../Components/CardCart/CardCart";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import {
  ContainerCart,
  ButtonCart,
  CartConfig,
  InfoProfile,
  AddressTitle,
  InfoRestaurant,
  EmptyCart,
  Freight,
  Total,
  Form,
  TotalContainer,
  PaymentTitle,
  MainCart,
  NameRestaurant,
} from "./styled";

const Cart = () => {
  useProtectedPage();

  const { states, setters } = useGlobal();
  const { cart, restaurant, order} = states;
  const {setOrder} = setters

  const [payment, setPayment] = useState([]);
  const [paymentMethod] = useState(["money", "creditcard"]);
  const [fullPrice, setFullPrice] = useState();

 
  const profile = useRequestData({}, `${BASE_URL}/profile`);


  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };


  const totalPrice = () => {
    let totalPrice = 0;
    for (const product of cart) {
      totalPrice += product.price * product.quantity;
    }
    const allTotalPrice = totalPrice + restaurant.shipping;

    setFullPrice(allTotalPrice);
  };


  const placeOrder = async () => {
    const body = {
      products: cart.map((product)=> {
        return({
          id: product.id,
          quantity: product.quantity
        })
      }),
      paymentMethod: payment
    }
    console.log(body);
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
    .then((res)=> {
      setOrder(res.data)
    })
    .catch((err)=> {
      console.log(err.response)
      alert(err.data.message)
    })

  }



  const onSubmitPlaceOrder = (event) => {
    event.preventDefault()
    placeOrder()
  }

  useEffect(() => {
    totalPrice();
  }, []);

  return (
    <ContainerCart>
      <Header title={"Meu Carrinho"} />
      <CartConfig>
        <InfoProfile>
          <AddressTitle>Endereço de entrega</AddressTitle>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>
        <MainCart>
          <div>
            {cart.length > 0 ? (
              <div>
                <InfoRestaurant>
                  <NameRestaurant>{restaurant.name}</NameRestaurant>
                  <p>{restaurant.address}</p>
                  <p>
                    {restaurant.deliveryTime} - {restaurant.deliveryTime + 10}
                    min
                  </p>
                </InfoRestaurant>
                {cart.map((data) => {
                  return (
                    <div>
                      <CardCart data={data} />
                    </div>
                  );
                })}
                <Freight>
                  Frete R$
                  {new Intl.NumberFormat("pt-BR", {
                    styled: "currency",
                    currency: "BRL",
                  }).format(restaurant.shipping ? restaurant.shipping : 0)}
                  ,00
                </Freight>
              </div>
            ) : (
              <EmptyCart>Carrinho Vazio</EmptyCart>
            )}
          </div>

          <div>
            <TotalContainer>
              <b>SUBTOTAL</b>
              {cart.length !== 0 ? (
                <Total>
                  R${" "}
                  {new Intl.NumberFormat("pt-BR", {
                    styled: "currency",
                    currency: "BRL",
                  }).format(fullPrice)},00
                </Total>
              ) : (
                <Total>R$ 00,00</Total>
              )}
            </TotalContainer>
          </div>
          <PaymentTitle>
            <p>Forma de pagamento</p>
          </PaymentTitle>
          <hr />
          <Form onSubmit={onSubmitPlaceOrder}>
            {paymentMethod.map((key) => {
              return (
                <div key={key}>
                  <Radio
                    checked={payment === key}
                    type={"radio"}
                    id="key"
                    name={"paymentMethod"}
                    onChange={onChangePayment}
                    value={key}
                    required
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              );
            })}
            <ButtonCart type="submit" >Confirmar</ButtonCart>
          </Form>
        </MainCart>  
      </CartConfig>
      <Footer page="cart" />
    </ContainerCart>
  );
};

export default Cart;