import styled ,{keyframes} from "styled-components";



//animação do cartão 
export const swipeRight = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`;
export const swipeLeft = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`;
export const ContainerCardApp = styled.div`
/* background-color: #a90b80; */
border-radius: 20px;
`
export const ContainerBotaoTroca = styled.img`
cursor: pointer;
border-radius: 45%;

`