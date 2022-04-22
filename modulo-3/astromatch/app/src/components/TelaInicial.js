import React,{useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";



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

// container da foto não está sendo usado para nada apenas para deixar mais fácil a visualização
const FotoPerfil = styled.img`
  /* display: flex; */
`;

// estilização para todas as informações dentro sendo nome idade bio e botões
const CardPerfil = styled.div`
  width: 30%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: lightcyan;
  border-color: black;
  align-items: center;
  img {
    width: 40%;
  }
`;
// estilização de botões
const BotaoLike = styled.div`
  display: flex;
`;

const TelaInicial= () =>{



 //state que está recebendo a api de profiles junto com o nome idade e biografia e foto e retornando na tela
 const [profile, setProfile] = useState({});

 //função que está recebendo da api as informações de idade foto e biografia
 const getProfiletoChoose = () => {
   axios
     .get(`${url}person`)
     .then((res) => {
       setProfile(res.data.profile);
     })
     .catch((res) => {
       console.log(res.response);
     });
 };

 //Recebe um id e uma escolha (choice). A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.
 const choosePerson = (id, boolean) => {
   const body = {
     id: id,
     boolean: boolean,
   };
   axios
     .post(`${url}choose-person`, body)
     .then(() => {
       getProfiletoChoose();
     })
     .catch((res) => {
       console.log(res.response);
     });
 };






 //monta a função de informções da bio foto e idade e nome na imagem
 useEffect(() => {
   getProfiletoChoose();
 }, []);



    return(

        <Main>
        <CardPerfil>
          <h2>AstroMatch</h2>
          <FotoPerfil src={profile.photo} />
          <p>
            {profile.name} {profile.age}
          </p>
          <p>{profile.bio}</p>
        </CardPerfil>
        <BotaoLike>
          <button>Deslike</button> <button>Like</button>
        </BotaoLike>
      </Main>



    )
}

export default TelaInicial