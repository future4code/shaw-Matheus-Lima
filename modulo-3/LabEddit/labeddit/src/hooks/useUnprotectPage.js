import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

import { goToFeedPage } from "../routes/Coordinator";

const useUnprotectPage = () => {
  const Navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(Navigate);
    }
  }, [Navigate]);
};

export default useUnprotectPage;
