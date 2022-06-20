// Infos de quem tem curso superior 
import React from "react";
export default class Etapa3 extends React.Component {
    state = {

    };

    render() {



        return (
            <div>
                <div>
                    <h3>Etapa 3 - INFORMAÇÃO GERAIS DE ENSINO </h3>
                </div>
                <p>Porquê você não terminou um curso  de graduação?</p>
                <input type="text" /><br />

                <p>Você fez algum curso complementar ? </p>
                <select>
                    <option value="Curso Técnico"> Curso Técnico </option>
                    <option value="Curso de inglês">Curso de inglês </option>
                </select>
                







            </div>
        )
    }
}