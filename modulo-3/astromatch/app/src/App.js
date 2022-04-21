import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/`



//estilização
const Main = styled.div`
/* padding: 40px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FotoPerfil = styled.img`
/* display: flex; */
`

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

`

const BotaoLike = styled.div`
display: flex;





`
const  App = ()=> {
  const [profile, setProfile] = useState({})
  const getProfiletoChoose = () =>{
    axios
    .get(`${url}person`)
    .then((res) =>{
      setProfile(res.data.profile)
    })
    .catch((res)=>{
      console.log(res.response)
    })
  }
  const choosePerson =(id, boolean) =>{
    const body = {
      id: id,
      boolean: boolean
      }
    axios
    .post(`${url}choose-person`,body)
    .then(()=>{
      getProfiletoChoose()
    })
    .catch((res)=>{
      console.log(res.response)
    })
  }
  useEffect(()=>{
    getProfiletoChoose()
  },[])
  // const getMatches = () =>{
  //   axios
  //   .get(`${url}choose-person`)
  //   .then((res)=>{
  //   })
  //   .catch((err)=>{
  //   })
  // }
  return (
    <Main>
      <CardPerfil>
      <FotoPerfil src={profile.photo} />
      <p>{profile.name} {profile.age}</p>
      <p>{profile.bio}</p>
     </CardPerfil>
      <BotaoLike>
      <button>Deslike</button> <button>Like</button>
      </BotaoLike>
      
      
</Main>
  );
}
export default App;