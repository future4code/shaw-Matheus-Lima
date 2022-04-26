import React from "react"
import styled from "styled-components"


const MainAdmin = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 32.10rem;
`



const ContainerBotes = styled.div`
display: flex;

justify-content: space-between;
`


const CardAdmin = styled.div`
     display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
    }
`






const AdminHomePage = () =>{

    return(
        <MainAdmin>
        <div>
    <h2>Painel de Administração</h2>
        </div>
        <ContainerBotes>
        <button>Voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
        </ContainerBotes>
        <CardAdmin>

           asdasd
        </CardAdmin>



        </MainAdmin>


)

}

export default AdminHomePage