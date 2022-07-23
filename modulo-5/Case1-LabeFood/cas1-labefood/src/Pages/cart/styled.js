import styled from "styled-components";

export const ContainerCart = styled.div`
display: flex;
flex-direction:column ;
height: 100%;
`

export const CartConfig = styled.div` 
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const MainCart = styled.div`
width: 90%;
`

export const InfoProfile = styled.div`
height: 12%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
font-size: 1.2rem;
padding: 1rem;
background-color: #eeee;
p{
  font-size: 1rem;
  font-weight: 500;
}
`

export const AddressTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  color: #b8b8b8;
  margin-bottom: 5px;
`

export const InfoRestaurant = styled.div`
height: auto;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
font-size: 1.2rem;
p{
  color: #b8b8b8;
  margin-bottom: 0.5rem;
}
`

export const NameRestaurant = styled.h4`
color:#E8222E;
font-weight: 500;
margin-bottom: 0.5rem;
`

export const EmptyCart = styled.p`
font-size: 1.5rem;
text-align:center ;
font-weight: 500;
`

export const Freight = styled.p`
display: flex;
justify-content: flex-end;
margin: 5px;
width: 85vw;
font-weight: 600;
`

export const TotalContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 1rem;
b{
  font-weight: 700;
}
`

export const Total = styled.p`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 1rem;
color:red;
font-weight: 600;
`

export const PaymentTitle = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: flex-start;
p{
  font-weight: 600;
}
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
height: 10%;
`

export const Form = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
label{
  align-items: flex-start;
  margin-top: 0.6rem;
}
`

export const ButtonCart = styled.div`
  width: 90%;
  height: 8vh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #E8222E;
  position: fixed;
  bottom: 10vh;
  left: 5%;
  font-weight: 500;
  font-size: 20px;
`