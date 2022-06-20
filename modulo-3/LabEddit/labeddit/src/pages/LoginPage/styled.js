import styled from "styled-components";


export const ContainerLogo = styled.img`
height: 346px;
width: 380px;
display: flex;
`

export const ContainerInputs = styled.input`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.6rem;
margin: 1.75rem;
flex-direction: column;
input{
    /* width: 320px; */
    /* margin: 8px; */
    /* height: 30px; */
}
`
export const Botao = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.5rem;
margin: 1.75rem;
width: 15rem;
background:linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 2rem;

:hover{
    background-color: #3e8e41;
  color: white;

}


`