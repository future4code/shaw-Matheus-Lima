import axios from "axios";
import { Base_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/Coordinator";

const auth = { headers: { Authorization: localStorage.getItem("token") } };


export const login = async (body, clear, navigate) => {
  try {
    const response = await axios.post(`${Base_URL}/users/login`, body);
    localStorage.setItem("token", response.data.token);
    clear();
    goToFeedPage(navigate);
  } catch (err) {
    alert("Erro ao logar!");
  }
};

export const signUp = async (body, clear, navigate) => {
  try {
    const response = await axios.post(
      `${Base_URL}/users/signup`,
      body,
      console.log("aqui é o body", body)
    );

    localStorage.setItem("token", response.data.token);
    clear();
    goToFeedPage(navigate);
  } catch (err) {
    console.log(err.response.data.message);
  }
};



export const postUpp = (body, clear) => {
  axios
    .post(`${Base_URL}/posts`, body, {
      headers: { Authorization: window.localStorage.getItem("token") },
    })
    .then((response) => {
      alert(response.data);
      clear()
    })
    .catch((err) => {
      console.log(err.data);
    });
};


export const createCommentPost = (id ,body, clear) =>{
  
  axios
  .post(`${Base_URL}/posts/${id}/comments`,body,auth)
  .then(()=>{
      window.location.reload()
      clear()
  })
  .catch((err)=>{
      console.log(err.response.data)
  })
}