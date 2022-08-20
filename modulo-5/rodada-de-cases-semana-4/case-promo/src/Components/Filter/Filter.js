import React from "react"
import { ButtonsContainer, FilterContainer, Title } from "./styled"
import { FilterButton } from "../Buttons/Buttons"

const Filter = (props) => {

  const genreButtons = props.allGenres.map((genre) => {

    if (genre.select === false) {
      return (
        <FilterButton key={genre.id} select={genre.select} onClick={() => props.onClickFilter(genre.id)}>
          {genre.name}
        </FilterButton>
      )
    } else {
      return <FilterButton key={genre.id} select={genre.select} onClick={() => props.onClickFilter(genre.id)}>
        {genre.name}
      </FilterButton>
    }
  })

  return (
    <FilterContainer>
      <Title>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Title>
      <p>FILTRE POR:</p>
      <ButtonsContainer>
        {genreButtons}
      </ButtonsContainer>
    </FilterContainer>
  )
}

export default Filter