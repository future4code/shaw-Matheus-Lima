import axios from 'axios'
import { useEffect, useState } from 'react'
import {api_Key} from "../Constants/api_Key"
import {BASE_URL} from "../Constants/BASE_URL"

export const GetMovie = (page,location) => {
    const [movie,setMovie] = useState([])
    useEffect (()=>{
        axios.get(`${BASE_URL}/movie/popular?api_key=${api_Key}&language=pt-BRL&page=${page}`)
        .then((response) => {
            console.log(response.data)
            setMovie(response.data.results)
        })
        .catch((error) => {
            console.log(error);
        })
    },[location])
    return movie
} 