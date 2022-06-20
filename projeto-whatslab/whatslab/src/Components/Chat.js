import styled from "styled-components"

const DivPai = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-family :  'Ubuntu' , sans-serif;
width: 100%;

`



const Chat = styled.div`
border: 2px solid black;
width: 28rem;
height: 60rem;
display: flex;
justify-content: bottom;
flex-direction: column;
align-items: center;
justify-content: flex-end;
background-color: #444;
color: white;




`
const Titulo = styled.h3`
text-align:center;`


const InputNome = styled.input`
font-weight:bolder;
/* margin: 0.50em; */
width: 3.5rem;

`
const InputMensagem = styled.input`
width: 19.5rem;
`

const Mensagem = styled.div`
display:flex;
flex-direction: column;



`













export {Chat,Titulo,InputNome,DivPai,InputMensagem,Mensagem}