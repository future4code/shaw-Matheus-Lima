import styled from 'styled-components'
// import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

export const InputMaterial = styled(TextField)`
width: 100%;

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