import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectPage from "../../hooks/useProtectPage";
import { goPostPage } from "../../routes/Coordinator";
import Headers from "../../components/Headers/Headers";
import { useRequestData } from "../../hooks/useRequestData";
import { Base_URL } from "../../constants/urls";
import { Postar, Linha, PostarTitulo } from "./styled";
import CardFeedPost from "../../components/CardFeedPost/CardFeedPost";
import { PostBotao } from "../../components/CardFeedPost/style";
import useForm from "../../hooks/useForms";
import { postUpp } from "../../services/user";

const FeedPage = (props) => {
  useProtectPage();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    postUpp(form, clear);
  };

  const onClickCard = (id) => {
    goPostPage(navigate, id);
  };

  const feeds = useRequestData([], `${Base_URL}/posts`);

  const feedCard = feeds[0].map((feed) => {
    return (
      <CardFeedPost 
        id={feed.id}
        title={feed.title}
        username={feed.username}
        body={feed.body}
        commentCount={feed.commentCount}
        voteSum={feed.voteSum}
        userVote={feed.userVote}
        onClick={() => onClickCard(feed.id)}
      />
    );
  });

  return (
    <div>
      <Headers />
      <form onSubmit={onSubmitForm}>
        <PostarTitulo
          name={"title"}
          value={form.title}
          onChange={onChange}
          placeholder="Escreva seu Titulo"
          required
        />

        <Postar
          name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder={"Escreva seu comentário!"}
          required
        />
        <PostBotao type={"submit"}>Postar</PostBotao>
      </form>

      <Linha />
      {feedCard}
    </div>
  );
};

export default FeedPage;
