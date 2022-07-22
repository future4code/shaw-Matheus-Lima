import { useState } from "react";
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  BoxNameQuantity,
  ContainerCardProduct,
  ImageProduct,
  InformButton,
  InformDescription,
  InformPrice,
  NameProduct,
} from "./styled";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <ContainerCardProduct>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
          <BoxNameQuantity>
            <NameProduct>{product.name}</NameProduct>
          </BoxNameQuantity>
          <InformDescription>
            {product.description}
          </InformDescription>
          <InformPrice>
            {`R$${product.price}`}
          </InformPrice>
          <InformButton onClick={()=> setShowModal(true)}>
            adicionar
          </InformButton>
        </BoxInform>
      </ContainerCardProduct>
      <ModalSelectQuantity open={showModal} setOpen={setShowModal}/>
    </>
  );
};

export default CardProduct;
