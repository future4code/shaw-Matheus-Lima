import { Container } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url, token } from "../../constant/constants";
import { useProtectedPage } from "../../constant/constants";
import Loading from "../../components/Loading"



const TripDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [triplistDetail, setTripListDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [candidatesList, setCandidatesList] = useState([{}]);
  const [aprovedList, setAprovedList] = useState([{}])

  useProtectedPage();


  // Novo modelo (ES8)
  const getTripDetail = async () => {
    setLoading(true);
    axios
      .get(`${url}/trip/${params.id}`, { headers: { auth: token } })
      .then((res) => {
        setTripListDetail(res.data.trip);
      })
      .catch((err) => {
        console.log(err.res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCandidatesList = async () => {
    axios
      .get(`${url}/trip/${params.id}`, { headers: { auth: token } })
      .then((res) => {
        setCandidatesList(res.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  console.log(triplistDetail);


  const getAprovedList = async () =>{
    axios
    .get(`${url}/trip/${params.id}`,{headers:{auth:token}})
    .then((res)=>{
      setAprovedList(res.data.trip.approved)
    }).catch((err)=>{
      console.log(err.res)
    })
    
    
  }
  // fazer lista de aprovados e reprovados para assim colocar no botão 


  const candidateAprove = async (id) =>{
    const body = {
      
        approve: true
      
    }
    axios
    .put(`${url}/trips/${params.id}/candidates/${id}/decide`,body,{headers:{auth:token}})
    .then((res)=>{
      alert("Usuário Aprovado com sucesso!")
      getCandidatesList()
      getAprovedList()

    }).catch((err)=>{
      console.log(err.res.data.mensage)
    })
  }

  const candidateReprove = async (id) =>{
    const body = {
      
        approve: false
      
    }
    axios
    .put(`${url}/trips/${params.id}/candidates/${id}/decide`,body,{headers:{auth:token}})
    .then((res)=>{
      alert("Usuário Reprovado!")
      getCandidatesList()
      getAprovedList()

    }).catch((err)=>{
      console.log(err.res.data.mensage)
    })
  }

  useEffect(() => {
    getTripDetail();
    getCandidatesList();
    getAprovedList()
  }, []);

  // lista de candidatos 
  const listCandidates = candidatesList ? (
    candidatesList.map((trip) => {
      return (
        <div>
          <p key={trip.id}>
            Nome: <b>{trip.name}</b>
          </p>
          <p>
            Idade <b>{trip.age}</b>
          </p>
          <p>
            Texto de Candidatura: <b>{trip.applicationText}</b>
          </p>
          <p>
            Pais: <b>{trip.country}</b>
          </p>
          <p>
            Profissão: <b>{trip.profession}</b>
          </p>

          <button onClick={()=> candidateAprove(trip.id)}>Aprovar</button>
      <button onClick={()=> candidateReprove(trip.id)}>Reprovar</button>
        </div>
      );
    })
  ) : (
    <p>Lista deu errado</p>
  );


  const listAproveds = aprovedList.map((trip) => {
    return (
      <div key={trip.id}>
        <p><strong>Nome: {trip.name}</strong></p>
      </div>
    )
  })

  

  return (
    <Container>
      <div>
        
        <b>Detalhes da viagem aqui</b>
        <p>
          Nome: <b>{triplistDetail.name}</b>
        </p>
        <p>
          Data: <b>{triplistDetail.date}</b>
        </p>
        <p>
          Descrição: <b>{triplistDetail.description}</b>{" "}
        </p>
        <p>
          {" "}
          Duração em dias: <b>{triplistDetail.durationInDays}</b>
        </p>
      </div>
      
    {loading ? (<Loading/>): listCandidates}
    <h2>Candidatos Aprovados</h2>
    {loading ? (<Loading/>): listAproveds}

    


      <button onClick={() => goBack(navigate)}>Voltar</button>
    </Container>
  );
};

export default TripDetailsPage;
