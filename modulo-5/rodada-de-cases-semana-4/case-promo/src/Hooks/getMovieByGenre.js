import axios from "axios"
import { useEffect, useState } from "react"
import { api_key } from "../Constants/api_Key"
import { BASE_URL } from "../Constants/BASE_URL"


export const getMovieByGenre = (page, genre, location) => {
    const [newMovie, setNewMovie] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/discover/movie?api_key=${api_key}&language=pt-BRL&page=${page}&with_genres=${genre}`)
            .then((res) => {
                setNewMovie(res.data)
            })
            .catch((err) => {
                console.log(err)
            }, [location])
        return newMovie

    })
}