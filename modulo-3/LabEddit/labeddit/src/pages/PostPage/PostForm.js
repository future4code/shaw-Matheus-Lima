import React from "react";
import useForm from "../../hooks/useForms";
import { createCommentPost } from "../../services/user";
import { ContainerInputs } from "../LoginPage/styled";

const PostForm = (props) => {
  const [form, onChange, clear] = useForm({ body: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createCommentPost(form, clear, );
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
          <ContainerInputs
          name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder={"Comente Algo aqui"}
          type={"text"}/>
          <button type={"submit"}>Comentar</button>
      </form>
    </div>
  );
};

export default PostForm