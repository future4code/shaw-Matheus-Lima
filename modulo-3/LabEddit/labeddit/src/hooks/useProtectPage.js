import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";

import { goToLoginPage } from "../routes/Coordinator";

const useProtectPage = () =>{
    const Navigate = useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLoginPage(Navigate)
        }
    },[Navigate])
}

export default useProtectPage