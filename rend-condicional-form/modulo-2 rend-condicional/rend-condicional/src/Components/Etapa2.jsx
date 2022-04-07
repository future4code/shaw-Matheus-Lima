// Infos de quem não tem curso superior

import React from "react";

export default class Etapa2 extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <div>
                    <h3>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
                </div>
                <p>Qual Curso?</p>
                <input type="text" />
                <br />
                <p>Qual a unidade de ensino? </p>
                <input type="text" />
                <br />
                
            </div>
        );
    }
}
