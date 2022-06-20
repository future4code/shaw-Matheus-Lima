import { ContainerBotao, PostCard } from "./style";
import { Heart, HeartBreak, ChatText } from "phosphor-react";
import { voteUpPost,voteDownPost,VoteDelPosts } from "../../services/post";
const CardFeedPost = (props) => {


  const voteUp = (id) =>{
    if(props.userVote){
      VoteDelPosts(id)
    }else{
      voteUpPost(id)
    }
  }

  const voteDown = (id) =>{
    if(props.userVote){
      VoteDelPosts(id)
    }else{
      voteDownPost(id)
    }
  }



  return (
    <div>
      <PostCard>
        <p>{props.title}</p>
        <p>{props.username}</p>
        <p>{props.body}</p>
        <ContainerBotao>
          <button>
            <Heart color="#AE2983" weight="fill" size={14} onClick={()=> voteUp(props.id)} />
          </button>
          {props.voteSum}
          <button>
            <HeartBreak size={14} color="#64545f" onClick={()=> voteDown(props.id)} />
          </button>
          {props.commentCount}
          <button onClick={props.onClick}>
            <ChatText size={19} color="#2ca04f" />
          </button>
        </ContainerBotao>
      </PostCard>
    </div>
  );
};

export default CardFeedPost;
