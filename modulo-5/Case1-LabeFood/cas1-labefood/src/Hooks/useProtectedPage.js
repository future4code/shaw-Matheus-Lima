import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Routes/coordinator";


const useProtectedPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      goToLogin(navigate);
    }
  }, []);
};

export default useProtectedPage