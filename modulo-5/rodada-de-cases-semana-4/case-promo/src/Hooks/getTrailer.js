import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { BASE_URL } from '../constants/BASE_URL'

export const GetTrailer = (id,location) => {
    const [trailer,setTrailer] = useState({})
    useEffect (()=>{
        axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${api_key}&language=en-US`)
        .then((res) => {
            const [filtroTrailer] = res.data.results.filter((trailer)=>{
                return trailer.name === "Official Trailer"
            })
            setTrailer(filtroTrailer)
        })
        .catch((err) => {
            console.log(err);
        })
    },[location])
    return trailer
} 