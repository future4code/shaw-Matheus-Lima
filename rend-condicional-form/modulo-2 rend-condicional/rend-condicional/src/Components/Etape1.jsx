// Dados Gerais
import React from "react";
export default class Etapa1 extends React.Component {
  state = {};

  render() {
    return (
      <div>

        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <form action="page">
          <p>Qual seu nome ?</p>
          <input type="text" />

          <p>Qual sua idade ?</p>
          <input type="Number" />

          <p>Qual seu email?</p>
          <input type="text" />

          <p>Qual a sua escolaridade?</p>
          <select>
            <option value={"Ensino médio completo"}>
              Ensino médio completo
            </option>
            <option value={"Ensino médio incompleto"}>
              Ensino médio incompleto{" "}
            </option>
            <option value={"Ensino superior completo"}>
              Ensino superior completo
            </option>
            <option value={"Ensino superior incompleto"}>
              Ensino superior incompleto
            </option>
          </select>
        </form>

        
      </div>
    );
  }
}
