import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

import React from 'react';
import {
  StyledImg,
  StyledName,
  ButtonRed,
  Container,
  StyledDescription,
  StyledPrice,
  TitleContainer
} from './styles';

const CartCard = (props) => {
  return (
    <Box>
        <Container>
          <StyledImg src={props.photoUrl} />
          <TitleContainer>
            <StyledName>{props.name}</StyledName>
          </TitleContainer>
          <StyledDescription>{props.description}</StyledDescription>
          <StyledPrice> R${props.price},00 <b>x{props.amount}</b></StyledPrice>
          <Button w='25%' mt='90px' ml='-100px' bg='white' onClick={props.removeItemFromCart}>Remover</Button>
        </Container>
    </Box>
  );
};

export default CartCard;