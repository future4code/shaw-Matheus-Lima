import React from "react";
import axios from "axios"



export class Usuario extends React.Component {

    state ={
        usuarios: [],
        usuariosId:[],
        
        

    }
    

    getAllUsers = () => {
        const header = {
            headers: {
                Authorization: "matheus-moura-shaw",
            },
        };
        
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        header
        )
        .then((response)=>{
            this.setState({usuarios:response.data})

        })
        .catch(error => {
            alert("Erro Ao Procurar Usuário")
            console.log(error)
            

        })
    };

    render() {
       
        return<div>
          
            

       

            
        

        </div>
    }
}
