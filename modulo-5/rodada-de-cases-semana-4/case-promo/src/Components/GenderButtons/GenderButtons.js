import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/Global/GlobalContext'
import { Ativo, Inativo, MainContainer } from './styled'

const GenderButtons = (genero) => {
  const [seleciona,setSeleciona] = useState(false)
  const [listaGeneros,setListaGeneros] = useState([])
  const {states, setter} = useContext(GlobalContext)
  const idGeneros = states.genre_ids
  const setIdGeneros = setter.setGenre_ids

  const clickDesativo = (()=>{
   
    setSeleciona(!seleciona)
  })

  const clickAtivo = (()=>{
    setSeleciona(!seleciona)
  })

  return (
    <MainContainer seleciona={seleciona}>
        {seleciona === false ? 
        <Inativo onClick={clickDesativo}>{genero.genero.name}</Inativo>
        :
        <Ativo onClick={clickAtivo}>{genero.genero.name} ⓧ</Ativo>
        }       
    </MainContainer>
  )
}

export default GenderButtons 