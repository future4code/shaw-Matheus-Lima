import React from "react"
import styled from "styled-components"



const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 500px;
justify-content: center;





`
const ContainerLista = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 31.25rem;
    margin: 10px 0;


`



const ApplicationFormPage = () =>{
    return(
        <Main>
            <ContainerLista>
                <h3>Inscreva-se para uma viagem</h3>
            <select><option>Escolha sua viagem</option></select>
            <input placeholder="Nome"></input>
      
            <input placeholder="Idade"></input>
      
            <input placeholder="Texto Candidatura"></input>
      
            <input placeholder="Profissão"></input>
            </ContainerLista>




        </Main>
    )
}


export default ApplicationFormPage