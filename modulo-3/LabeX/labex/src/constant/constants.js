import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-moura-shaw";


  
  
export const useProtectedPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Usuario não logado. Faça seu login para continuar!");
      navigate("/Login");
    }
  }, []);
};

export const lugares = [
  "Mercúrio",
  "Vênus",
  "Marte",
  "Júpter",
  "Saturno",
  "Urano",
  "Netuno",
  "Estrela T Tauri",
  "Sistema Planetario Kepler-18",
  "Quasar APM 08279+5255"
]

export const token = localStorage.getItem('token')
