import React from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { 
    BoxInform, 
    BoxInformButtonPrice, 
    BoxNameQuantity, 
    ContainerCardProducts, 
    ImageProducts, 
    InformButton, 
    InformDescription, 
    InformPrice, 
    NameProduct, 
    QuantityProduct
} from "./styled";

const CardCart = ({data}) => {
  const { states, requests, setters } = useGlobal();
  const {removeItemToCart } = requests;

    return(
        <ContainerCardProducts>
        <ImageProducts src={data.photoUrl}/>
        <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{data.name}</NameProduct>
          { <QuantityProduct>{data.quantity}</QuantityProduct>}
        </BoxNameQuantity>
            <InformDescription>
                {data.description}
            </InformDescription>
            <BoxInformButtonPrice>
                <InformPrice>
                   {data.price}0
                </InformPrice>
                <InformButton onClick={() => removeItemToCart(data.id)}>
                remover
            </InformButton>
            </BoxInformButtonPrice>
        </BoxInform>
    </ContainerCardProducts>
    )
}

export default CardCart