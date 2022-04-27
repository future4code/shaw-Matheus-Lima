import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";


const useProtectPage = () => {
    const navigate = useNavigate();
    // atenção na forma de passar a url pois pode não funcionar
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token === null) {
        console.log("Você não está logado");
        navigate("/LoginPage");
      }
    }, []);
  };

  export default useProtectPage