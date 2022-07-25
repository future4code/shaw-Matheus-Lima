import styled from "styled-components";

export const ContainerCardProducts = styled.div`
width: 100%;
margin: 0.5rem 0;
display: flex;
border: solid 1px gray;
border-radius: 9px;
`
export const ImageProducts = styled.img`
width: 6rem;
height: 7rem;
border-radius: 9px 0 0 9px  ;
`
export const QuantityProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 2.063rem;
height: 2.063rem;
border: solid 1px #E8222E;
`

export const  BoxNameQuantity = styled.div`
`

export const NameProduct = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  color:#E8222E;
  margin-bottom: 0.25rem;
  margin-left: 4.8px;
` 


export const BoxInform = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
  flex-grow: 1;
`

export const InformDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: grey;
  padding: 0.25rem;
    flex-grow: 1;
`

export const BoxInformButtonPrice = styled.div`
display: flex;
justify-content: space-between;
`

export const InformPrice = styled.p` 
  font-size: 1.1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.25rem;
  flex-grow: 1;
`

export const InformButton = styled.button` 
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: #fff;
outline: 0;
border: solid 1px #E8222E;
font-weight: 600;
color: #E8222E;
`