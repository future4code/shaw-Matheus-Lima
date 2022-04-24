import React from "react";
import axios from "axios"
import styled from "styled-components";

const CardUsuarios = styled.div`
border: 1px solid black;
padding: 15px;
margin: 15px;
`

export class ListaUsuario extends React.Component {
state ={
    usuarios:  []
}


componentDidMount(){
    this.getAllUsers()
}
    
getAllUsers = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,{
        headers:{
            Authorization: "matheus-moura-shaw"
        }
    }).then((res)=>{
        this.setState({usuarios:res.data})
        // console.log(res)
    })
    .catch((error)=>{
        alert('Ocorreu um erro!')
        // console.log(error)
    })
}

    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) =>{
            return <li>{user.nome}</li>
        })
       
        return(
        <div>
            <h2>Lista de Usuários</h2>
          <button onClick={this.props.irParaCadastro}>Trocar de Tela</button>
          {listaUsuarios}
            

       

            
        

        </div>
    )
}
}