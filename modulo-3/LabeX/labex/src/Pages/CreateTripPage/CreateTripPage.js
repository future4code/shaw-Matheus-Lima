import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import React, { useState } from "react";
import {
  useProtectedPage,
  lugares,
  url,
  token,
} from "../../constant/constants";
import axios from "axios";

const CreateTripPage = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  useProtectedPage();

  const formateDate = () => {
    const dia = data.slice(8, 10);
    const mes = data.slice(5, 7);
    const ano = data.slice(0, 4);
    const newDate = `${dia}/${mes}/${ano}`;
    return newDate;
  };

  const postCreateTrip = () => {
    const body = {
      name: nome,
      planet: lugares,
      date: formateDate(),
      description: descricao,
      durationInDays: duracao,
    };
    axios
      .post(`${url}/trips`, body, {
        headers: {
          auth: token,
        },
      })
      .then(() => {
        setNome("");
        setData("");
        setDescricao("");
        setDuracao("");
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeData = (event) => {
    setData(event.target.value);
  };

  const onChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const onChangeDuracao = (event) => {
    setDuracao(event.target.value);
  };

  const renderLugares = lugares ? (
    lugares.map((trips) => {
      return <option key={trips}>{trips}</option>;
    })
  ) : (
    <p>Erro!</p>
  );

  return (
    <Container>
      <h1>Criar Viagem</h1>
      <input
        placeholder="Nome"
        onChange={onChangeNome}
        type="text"
        value={nome}
        required
      ></input>
      <input
        placeholder="Data"
        onChange={onChangeData}
        type="date"
        value={data}
        required
      ></input>
      <input
        placeholder="Descrição"
        onChange={onChangeDescricao}
        type="text"
        value={descricao}
        required
      ></input>
      <input
        placeholder="Duração em dias"
        onChange={onChangeDuracao}
        type="number"
        value={duracao}
        required
      ></input>
      <select name="Escolha uma Viagem">
        <option>Escolha um Planeta</option>
        {renderLugares}
      </select>
      <button onClick={() => postCreateTrip()}>Criar</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </Container>
  );
};

export default CreateTripPage;
