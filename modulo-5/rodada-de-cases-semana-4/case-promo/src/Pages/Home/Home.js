import React, { useState } from "react";
import { useNavigate, useLocation,useParams } from "react-router-dom";
import CardMovie from "../../Components/CardMovie/CardMovie";
import CardHeader from "../../Components/CardHeader/CardHeader";
import {GetMovie} from "../../Hooks/getMovie"
import { goToHome,goToPages } from "../../Routes/Cordinator";
import { MainContainer, MoviesList, PaginateContainer } from "./styled";



const Home = ()=>{
    const [list, setList] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    const movieHome = GetMovie(1,location.pathname)
    const moviePages = GetMovie(params.page,location.pathname)
    

    const changePage = ({select})=>{
        console.log(select)
        if((select+1) === 1) {
            goToHome(navigate)
        }else{
            goToPages(navigate,select+1)
        }
    }
    return (
        <MainContainer>
            <CardHeader/>
              {location.pathname === "/" ?
              <MoviesList>
                {movieHome.length > 0 ? movieHome.map((movie) => {
                    return <CardMovie key={movie.id} movie={movie}/>;
                  }) : <p>Carregando filmes</p>}
              </MoviesList>
              :
              <MoviesList>
                {moviePages.length > 0 ? moviePages.map((movie) => {
                    return <CardMovie key={movie.id} movie={movie}/>;
                  }) : <p>Carregando filmes</p>}
              </MoviesList>
              }
              <PaginateContainer
                previousLabel={"Anterior"}
                nextLabel={"Próxima"}
                pageCount={500}
                onPageChange={changePage}
                onClick={changePage}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
        </MainContainer>
        )

}

export default Home