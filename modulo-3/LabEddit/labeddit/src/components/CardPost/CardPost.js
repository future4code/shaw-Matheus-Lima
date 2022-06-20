import React from "react";
import { PostCard,ContainerBotao } from "./style";
import { Heart, HeartBreak, ChatText } from "phosphor-react";
import PostForm from "../../pages/PostPage/PostForm";

const CardPost = (props) => {
    
    return(<PostCard>
        <p>{props.username}</p>
        <p>{props.body}</p>
        <ContainerBotao>
          <button>
            <Heart color="#AE2983" weight="fill" size={14} />
          </button>
          {props.voteSum}
          <button>
            <HeartBreak size={14} color="#64545f" />
          </button>
         {props.userVote}
         <button onClick={props.onClick}>
            <ChatText size={19} color="#2ca04f"/>
          </button>
        </ContainerBotao>
      </PostCard>


   

    )
    
}


export default CardPost