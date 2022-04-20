import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'



const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-moura-shaw/`


const Main = styled.div`
background-color: blue;
border: 2px solid black;
justify-content: center;
width: 50%;
align-items: center;
 
`

const FotoPerfil = styled.img`


  margin-right: 10px;
  border-radius: 50%;
 

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
    .get(`${url}choose-person`,body)
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
      <FotoPerfil src={profile.photo}/>
      <p>{profile.name} {profile.age}</p>


</Main>

    
  );
}

export default App;
