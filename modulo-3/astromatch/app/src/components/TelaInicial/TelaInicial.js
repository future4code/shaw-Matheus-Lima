import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { ContainerLike, ContainerDeslike } from "./StyledInicial";
const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/`;
//estilização
//Container Pai de todos
const Main = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AbaixoMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// container da foto não está sendo usado para nada apenas para deixar mais fácil a visualização
const FotoPerfil = styled.img``;

// estilização para todas as informações dentro sendo nome idade bio e botões
const CardPerfil = styled.div`
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: lightcyan;
  border: 1px solid lightblue;
  border-radius: 30%;
  align-items: center;

  img {
    width: 40%;
  }
`;
// estilização de botões
const BotaoLike = styled.div`
  width: 40%;
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
`;

const TelaInicial = () => {
  //state que está recebendo a api de profiles junto com o nome idade e biografia e foto e retornando na tela
  const [profile, setProfile] = useState({});

  //função que está recebendo da api as informações de idade foto e biografia
  const getProfiletoChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((res) => {
        console.log(res.response);
      });
  };

  //Recebe um id e uma escolha (choice). A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.
  const postChoosePerson = (id, boolean) => {
    const body = {
      id: id,
      boolean: boolean,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/choose-person",
        body
      )
      .then(() => {
        getProfiletoChoose();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //monta a função de informções da bio foto e idade e nome na imagem
  useEffect(() => {
    getProfiletoChoose();
  }, []);

  return (
    <Main>
      {profile ? (
        <AbaixoMain>
          <h2>AstroMatch</h2>
          <CardPerfil>
            <FotoPerfil src={profile.photo} />
            <p>
              {profile.name} - {profile.age}Anos
            </p>

            <p>{profile.bio}</p>
          </CardPerfil>

          <BotaoLike>
            <ContainerDeslike onClick={() => postChoosePerson(false)}>
              Deslike
            </ContainerDeslike>
            <ContainerLike onClick={() => postChoosePerson(true)}>
              Like
            </ContainerLike>
          </BotaoLike>
        </AbaixoMain>
      ) : (
        <div>Você zerou todos os Matchs!</div>
      )}
    </Main>
  );
};

export default TelaInicial;
