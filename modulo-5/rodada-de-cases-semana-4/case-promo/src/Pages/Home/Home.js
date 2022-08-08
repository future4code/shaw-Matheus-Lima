import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filter from "../../Components/Filter/Filter"
import HeaderHome from "../../Components/CardHeader/CardHeader"
import { api_Key } from "../../Constants/api_Key"
import { HomeContainer } from "./styled"
import { goToDetailsMovie } from "../../Routes/Cordinator"
import { genresList } from "../../Constants/genresList"
import MoviesPagination from "../../Components/MoviesPagination/MoviesPagination"
import MovieCard from "../../Components/CardMovie/CardMovie"


const HomePage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [allGenres, setAllGenres] = useState(genresList)
  const [page, setPage] = useState(1)


  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?${api_Key}&language=pt-BR&page=${page}`)
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((err) => { console.log(err) })
  }


  useEffect(() => {
    getMovies()
  }, [page])

  const movieList = (movies.length > 0) ?
    movies
      .filter((movie) => {

        const genreIds = movie.genre_ids

        if (genres.length === 0) {
          return true
        } else {
          for (let genre of genreIds) {
            if (genres.includes(genre)) {
              return true
            }
          }
        }

      })
      .map((movie) => {
        const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

        return (
          <MovieCard key={movie.id} id={movie.id}
            poster={poster}
            title={movie.title}
            releaseDate={movie.release_date}
            goToDetailsMovie={() => goToDetailsMovie(navigate, movie.id)}
          />
        )
      }) : <h1>Nenhum filme encontrado</h1>


  const onClickFilter = (genreId) => {

    const changeButtonColor = allGenres.map((genre) => {

      if (genre.id === genreId) {
        if (genre.select === false) {
          return { ...genre, select: true }
        } else {
          return { ...genre, select: false }
        }
      }
      return genre
    })
    setAllGenres(changeButtonColor)

    const checkId = genres.includes(genreId)

    if (checkId === true) {

      const newGenresList = genres.filter(
        genre => genre !== genreId
      )

      return setGenres(newGenresList)

    } else {
      return (
        setGenres([...genres, genreId])
      )
    }
  }


  const changePage = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
  }


  return (
    <div>
      <HeaderHome />
      <Filter onClickFilter={onClickFilter} allGenres={allGenres} />
      <HomeContainer>
        {movieList}
      </HomeContainer>
      <MoviesPagination page={page} changePage={changePage} />
    </div>
  )
}

export default HomePage