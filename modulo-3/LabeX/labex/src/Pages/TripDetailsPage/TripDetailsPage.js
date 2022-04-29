import { Container } from "./style";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, token } from "../../constant/constants";
import { useProtectedPage } from "../../constant/constants";


const TripDetailsPage = ()=> {
const navigate = useNavigate()
// const [candidatoValor = setCandidato] = useState(true)

useProtectedPage()

useEffect(()=> {
  axios.get(`${url}/trip/id`, {
    headers: {
      auth: token
    }
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log("Erro!", err.response);
  })
  }, [])

  const getTripDetail = () =>{
    axios
    .get(`${url}/trip/id`,{
      headers:{
        auth:token
    }})
  }

    return (
      <Container>
          <div>Detalhes da viagem aqui</div>
          <button onClick={() => goBack(navigate)}>Voltar</button>
      </Container>
    );
  }
  
  export default TripDetailsPage;