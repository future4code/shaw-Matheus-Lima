import React from "react";
import styled from 'styled-components'


const Estilo = styled.div`
display: flex;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Texto = styled.h4 `
 display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`




function CardPequeno(props) {
  return (
    <div> 
    <Estilo><img src={props.imagem} /></Estilo>
      <div>
       <Texto> <h4>{props.email}</h4> </Texto>
       <Estilo><img src={props.imagemlocaliza} /></Estilo> 
      <Texto>  <p>{props.endereco}</p></Texto>
      </div>
    </div>
  );
}

export default CardPequeno;
