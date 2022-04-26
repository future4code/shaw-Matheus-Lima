import React from "react"
import styled from "styled-components"

const MainList = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const CardViagens = styled.div`

box-shadow: rgb(0 0 0 / 40%) 0px 4px 8px 0px;

`



const ListTripsPage = () =>{
    return(
        <MainList>

            <div>
            <button>Voltar</button> <button>Escreva-se</button>
            
            </div>
            <h1>Lista de Viagens</h1>
             <CardViagens>
                 loremipsunasiuodhyaisduyhbas<br></br>
                 asdohiuaosudhauoshdoauhsdouahsd<br></br>
                 aisudhaiushdiuahsdiaushdiashdiausdh<br></br>
                 <br></br>
                 asiudhaiushdiuashdiuashdiaushdiuashd


             </CardViagens>
        </MainList>

    )

}

export default ListTripsPage