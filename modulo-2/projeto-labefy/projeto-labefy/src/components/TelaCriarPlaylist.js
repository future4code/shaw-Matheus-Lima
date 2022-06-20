import React from "react"
import axios from "axios"
import Styled from "styled-components"

export default class TelaCriarPlaylist extends React.Component {
    state = {
        playlist: "",
        
        
    }

    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

   
    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist,
          
        }

        axios.post(url, body, {
            headers: {
                Authorization: "matheus-moura-shaw"
            }
        })
        .then((res) => {
            alert("Playlist Criada com Sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaPlaylist}>Tela de Playlist</button>
                <h2>Playlists</h2>
                <input
                    placeholder={"Crie a sua Playlist"}
                    value={this.state.playlist}
                    onChange={this.handlePlaylist}
                />
                
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        )
    }
}