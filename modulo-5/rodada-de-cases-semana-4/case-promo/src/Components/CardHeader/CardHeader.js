import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {GetGenre} from "../../Hooks/getGenre"
import { goToHome } from '../../Routes/Cordinator'
import GenderButtons from '../GenderButtons/GenderButtons'
import { Content, GenderList, MainContainer, MainText, Top } from './styled'

const HeaderHome = () => {
  const generos = GetGenre()
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Top>
        <p>
          TMDB
        </p>
        <div onClick={()=>goToHome(navigate)}></div>
      </Top>
      <Content>
        <MainText>
          Milhões de filmes, séries e pessoas para descobrir. Explore já!
        </MainText>
        <GenderList>
          {generos.length > 0 ? generos.map((genero) => {
                return <GenderButtons key={genero.id} genero={genero}/>;
              }) : <p></p>}
        </GenderList>
      </Content>
    </MainContainer>
  )
}

export default HeaderHome 