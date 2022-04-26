import React from "react"
import styled from "styled-components"

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Botoes = styled.div`
display: flex;
display: block;

`




const Home = () =>{
    return(
        <Main>
<Botoes>
<h2>LabeX</h2>
            <button>Ver Viagens</button>
            <button>Area Admin</button>


</Botoes>
            

        </Main>
    )
}


export default Home