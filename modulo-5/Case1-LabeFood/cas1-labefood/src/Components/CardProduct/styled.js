import styled from "styled-components";

export const ContainerCardProduct = styled.div`
.Rectangle {
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);
}

`

export const ImageProduct = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 120px;
  object-fit: cover;
`

export const QuantityProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid 1px red;
width: 2.063rem;
height: 2.063rem;
`

export const BoxInform = styled.div`
display: flex;
justify-content: space-between;


`

export const NameProduct = styled.h3`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
/* letter-spacing: -0.39rem; */
color: red;
padding-bottom: 0.25rem;
` 

export const BoxNameQuantity = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem 0rem 0 1rem;
flex-grow: 1 ;
`
export const InformDescription = styled.p`
   width: 200px;
  height: 30px;
  margin: 8px 16px 4px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #000000;

`

export const BoxInformPriceButton = styled.div`
display: flex;
justify-content: space-between;
`

export const InformPrice = styled.p`
  width: 118px;
  height: 19px;
  margin: 4px 8px 15px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);`

export const InformButton = styled.button`
  display: flex;
  max-height: 1px;
  flex-direction: row;
  justify-content: space-between;
  color: #b8b8b8;
  padding: 0.90rem
`