import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {goBack} from "../../Routes/coordinator"

const MainCreate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 600px;
justify-content: center;



`
const ContainerLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 400px;
justify-content: space-between;

`
const ContainerBotoes = styled.div`
display: flex;
margin: 20px;

`






const CreateTripPage = () =>{

    const navigate = useNavigate()
    
   
  

    return(
        <MainCreate>
 
            <ContainerLabel>
            <input placeholder="Nome"></input>
            
            <select>
                <option> Escolha um planeta</option>
            </select>
           
            <input placeholder="Descrição"></input>
            <input placeholder="Duração em dias" type={"number"}></input>
            
            </ContainerLabel>
<ContainerBotoes>
        <button onClick={()=> goBack(navigate)}>Voltar</button> <button>Criar</button>

        </ContainerBotoes>

        </MainCreate>


    )

}

export default CreateTripPage