import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'






const Post = (props) => {


  const [curtidaValue, setCurtidaValue] = useState(false)
  const [numeroCurtidas, setNumeroCurtidaValue] = useState(0)
  const [comentarioValue, setComentarioValue] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarioArray, setComentarioArray] = useState([])
  const onClickCurtida = () => {
    if (curtidaValue) {
      setCurtidaValue(false)
      setNumeroCurtidaValue(0)

    } else {
      setCurtidaValue(true)
      setNumeroCurtidaValue(1)
    }
  };
  const iconeCurtida = curtidaValue ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  

  const onClickComentario = () => {
    setComentarioValue(!comentarioValue)
  };

  const enviarComentario = (comentario) => {
    const listadeComentarios = [...comentarioArray, comentario]
    setComentarioArray(listadeComentarios)
    setNumeroComentarios(numeroComentarios + 1)
    setComentarioValue(false)

    


  }



  const caixaDeComentario =   
  comentarioValue ? (<SecaoComentario enviarComentario={enviarComentario}/>)
  :(comentarioArray.map(comentario =>{
      return(
      <CommentContainer>
        <p>{comentario}</p>
      </CommentContainer>
      )
  }))
  

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
        valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post