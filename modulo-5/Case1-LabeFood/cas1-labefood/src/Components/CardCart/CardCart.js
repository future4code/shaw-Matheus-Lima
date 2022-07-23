import React, { useState } from "react";
import { BoxInform, BoxInformButtonPrice, BoxNameQuantity, ContainerCardProducts, ImageProducts, InformButton, InformDescription, InformPrice, NameProduct } from "./styled";

const CardCart = (props) => {
    return(
        <ContainerCardProducts>
        <ImageProducts src={props.photoUrl}/>
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{props.name}</NameProduct>
            </BoxNameQuantity>
            <InformDescription>
                {props.description}
            </InformDescription>
            <BoxInformButtonPrice>
                <InformPrice>
                   {props.price}0
                </InformPrice>
                <InformButton onClick={""}>
                remover
            </InformButton>
            </BoxInformButtonPrice>
        </BoxInform>
    </ContainerCardProducts>
    )
}

export default CardCart