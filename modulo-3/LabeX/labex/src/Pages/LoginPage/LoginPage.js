import React from "react"
import styled from "styled-components"

const MainLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ContainerInput = styled.label`
display: flex;
flex-direction: column;


`

const ContainerBotao = styled.div`
display: flex;

`



const LoginPage = () =>{
    return(
        <MainLogin>

            <h3>Login</h3>
            <ContainerInput>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha" type={"password"}></input>
            
            </ContainerInput>

            <ContainerBotao>
            <button>Login</button> <button>Voltar</button>
            </ContainerBotao>


        </MainLogin>

    )

}

export default LoginPage