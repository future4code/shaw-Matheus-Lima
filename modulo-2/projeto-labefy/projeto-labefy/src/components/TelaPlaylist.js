import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`


export default class TelaListalistaPlaylist extends React.Component {
   
    state = {
        
        listaPlaylist: []
        
    }
    

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "chijo-paiva"
            }
        }).then((res) => {
            this.setState({ listaPlaylist: res.data })
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })

       
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId${id}`
        axios.delete(url, {
            headers: {
                Authorization: "matheus-moura-shaw"
            }
        })
            .then((res) => {
                alert("Playlist deletada com sucesso!")
                this.getAllPlaylists()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const playListas = this.state.listaPlaylist.map((lista) => {
            return (
                <CardPlaylist key={lista.id}>
                    {lista}
                    <button onClick={() => this.deletarUsuario(lista.id)}>X</button>
                </CardPlaylist>
            )
        })

        return (
            <div>
                <button onClick={this.props.criarPlaylist}>Ir Para Criar Playlist</button>
                <h2>Lista de Usuários</h2>
                {playListas}
            </div>
        )
    }
}