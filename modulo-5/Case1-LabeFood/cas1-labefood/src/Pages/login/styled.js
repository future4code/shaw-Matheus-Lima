import styled from 'styled-components'
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const InputMaterial = styled(TextField)`
width: 100%;

`
export const LogoImg = styled.img`
margin: 20% 0 10% 0;
`

export const Main = styled.div`
padding: 10px;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 1rem;
}

` 

export const Form = styled.form`
display: flex;
flex-direction: column;
height: 30%;
width: 80%;
justify-content: space-evenly;


`
export const ButtonStyled = styled(Button)`
&&{
    color: #000;
    width: 100%;
    background-color: #E8222E
;
}


`

export const DivPassword = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


`

export const ButtonSingUp = styled.button`
background-color: transparent;
border: none;
transition: 0.3s;
font-size: 1rem;
font-weight: 700;
cursor: pointer;
&:houver{
    font-size: 1rem;
    color: red;
    background-color: red;
}`