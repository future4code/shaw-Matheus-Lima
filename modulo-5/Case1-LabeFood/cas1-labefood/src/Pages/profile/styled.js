import styled from "styled-components";

export const ContainerProfile = styled.div`
`

export const InfosProfile = styled.div`
height: 8vh;
width: 90%;
display: flex;
justify-content: space-between;
flex-direction: row;
font-size: 1rem;
font-weight: 600;
margin: 1rem;
p{
    margin-bottom: 5px;
}
`

export const EditButton = styled.button`
background-color: transparent;
border: none;
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

export const ProfileAdrees = styled.div`
background-color: #eeee;
height: 10vh;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
font-size: 1rem;
width: 100%;
padding: 1rem;
margin-bottom: 2rem;
`

export const Address = styled.p`
 font-weight: 600;
`

export const Historic = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 1rem;
width: 100%;
height: 30%;
hr{
    width: 90%;
    color:black;
}
`