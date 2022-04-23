import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PaiListaMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerListaMatches = styled.div` // lista a ser mostrada uma em baixo da outra
  display: flex;
  flex-direction: column;
  height: 40px;
`;

const ContainerListaMatchs = styled.img` // imagens que vem em lista
width: 100px;
height: 200px;
`



const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/";

const TelaMatch = () => {

const [listMatch, setListaMatch] = useState([]);

  // função que recebe um api que retorna um array dos perfils que deram match
  const getMatches = () => {
    axios
      .get(`${url}matches`)
      .then((res) => {
        setListaMatch(res.data.matches);
      })
      .catch((err) => {
        console.log(err.data.matches);
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

  const ListaLikes = listMatch.map((gostei)=>{
    return (
    <div>
    <ContainerListaMatchs>{gostei.photo}</ContainerListaMatchs>
    <ContainerListaMatches>{gostei.name}</ContainerListaMatches>
   
    </div>
 )
  })



  return (
    <PaiListaMatch>
      <h2>Matches</h2>
      <ContainerListaMatches>{ListaLikes}</ContainerListaMatches>
    </PaiListaMatch>
  );
};

export default TelaMatch