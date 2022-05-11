import axios from "axios";
import { Base_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/Coordinator";

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
