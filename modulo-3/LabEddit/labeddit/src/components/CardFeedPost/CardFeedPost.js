import axios from "axios";
import { Base_URL } from "../../constants/urls";
import { ContainerBotao, PostCard } from "./style";
import { Heart, HeartBreak, ChatText } from "phosphor-react";
const CardFeedPost = (props) => {
  return (
    <div>
      <PostCard>
        <p>{props.title}</p>
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
        <button onClick={props.onClick}>
        <ChatText size={19} color="#2ca04f" />
        </button>
        </ContainerBotao>
      </PostCard>
    </div>
  );
};

export default CardFeedPost;
