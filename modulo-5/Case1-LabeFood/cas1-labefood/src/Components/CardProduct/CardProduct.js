import { useState } from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { QuantityProduct } from "../CardCart/styled";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  BoxNameQuantity,
  ContainerCardProduct,
  ImageProduct,
  InformAddItemButton,
  InformButton,
  InformDescription,
  InformPrice,
  InformRemoveItemButton,
  NameProduct,
} from "./styled";

const CardProduct = ({ product,restaurant }) => {
  const [showModal, setShowModal] = useState(false)
  const { requests,states } = useGlobal()
  const { addToCart,removeToCart } = requests
  const {cart} = states

  const choiceQuantity = (quantity) => {
    addToCart(product,quantity,restaurant)
    setShowModal(false)
  }

  const productInCart = cart.find((productCart) => productCart.id === product.id)
  






  return (
    <>
      <ContainerCardProduct>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
          <BoxNameQuantity>
            <NameProduct>{product.name}</NameProduct>
           {productInCart && <QuantityProduct>{ productInCart.quantity}</QuantityProduct>}
          </BoxNameQuantity>
          <InformDescription>
            {product.description}
          </InformDescription>
          <InformPrice>
            {`R$${product.price}`}
          </InformPrice>
          {
            productInCart? 
            <InformRemoveItemButton onClick={()=> removeToCart(product.id)}>
              Remove

            </InformRemoveItemButton>
            :

            <InformAddItemButton onClick={()=> setShowModal(true)}>
            adicionar
          </InformAddItemButton> }
        </BoxInform>
      </ContainerCardProduct>
      <ModalSelectQuantity choiceQuantity={choiceQuantity} open={showModal} setOpen={setShowModal} />
    </>
  );
};

export default CardProduct;
