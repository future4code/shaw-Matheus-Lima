import React from "react"
import { CastCardContainer, Path } from "./styled"

const CastCardMovie = (props) => {

  return (
    <CastCardContainer
      key={props.id}
    >
      <Path src={props.path} alt="" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.character}</p>
      </div>
    </CastCardContainer>
  )
}

export default CastCardMovie