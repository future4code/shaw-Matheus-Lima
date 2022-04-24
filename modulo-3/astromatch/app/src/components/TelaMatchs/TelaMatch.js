import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PaiListaMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ContainerListaLikes = styled.div` // lista a ser mostrada uma em baixo da outra
  display: flex;
  flex-direction: column;
  height: 40px;
`;

const ContainerListaMatchs = styled.img` // imagens que vem em lista
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: white;

`



const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw";

const TelaMatch = () => {

const [listMatch, setListaMatch] = useState([]);


  // função que recebe um api que retorna um array dos perfils que deram match
  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/matches" 
        
      )
      .then((res) => {
        setListaMatch(res.data.matches);
      })
      .catch((err) => {
        console.log(err.response, "Deu ruim!");
      });
  };

  

  //função que recebe uma api para limpar os matches
  const putClear = () => {
    axios
      .put(`${url}clear`)
      .then((res) => {
        setListaMatch([]);
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const paginaLikes = listMatch.map((gostei)=>{
    return (
    <div>
    <img src={gostei.photo}></img>
    <ContainerListaLikes>{gostei.name}</ContainerListaLikes>
   
    </div>
 )
  })
// console.log(listMatch,"array")


  return (
    <PaiListaMatch>
      <h2> Lista Matches</h2>
      {/* <button onClick={putClear}>Clear</button> */}
      <ContainerListaLikes>{paginaLikes}</ContainerListaLikes>
      

    </PaiListaMatch>
  );
};

export default TelaMatch