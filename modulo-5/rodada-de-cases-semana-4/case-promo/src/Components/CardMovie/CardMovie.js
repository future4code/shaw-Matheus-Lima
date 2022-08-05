import React from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { img_url } from "../../Constants/img_url";
import { goToDetailsMovie } from "../../Routes/Cordinator";


const CardMovie = (movie) => {
    const navigate = useNavigate()
    const location = useLocation()
    return <div location={location.pathname}>
        <img src={`${img_url}${movie.movie.backdrop_path}`} alt="cartaz-movie" onClick={() => goToDetailsMovie(navigate, movie.movie.id)}></img>
        <p>{movie.movie.title}</p>
        <p>{movie.movie.release_date}</p>

    </div>

}

export default CardMovie