import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { BASE_URL } from '../constants/BASE_URL'

export const GetRecommendations = (id,location) => {
    const [movie,setMovie] = useState([])
    useEffect (()=>{
        axios.get(`${BASE_URL}/movie/${id}/recommendations?api_key=${api_key}&language=pt-BRL&page=1`)
        .then((res) => {
            console.log(res.data)
            setMovie(res.data.results)
        })
        .catch((err) => {
            console.log(err);
        })
    },[location])
    return movie
} 