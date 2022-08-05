import axios from "axios"
import { useEffect, useState } from "react"
import {api_Key} from "../Constants/api_Key"
import {BASE_URL} from "../Constants/BASE_URL"


export const GetGenre = () => {
    const [genres,setGenres] = useState([])
    useEffect (()=>{
        axios.get(`${BASE_URL}/genre/movie/list?api_key=${api_Key}&language=pt-BRL`)
        .then((response) => {
            setGenres(response.data.genres)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    return genres
} 