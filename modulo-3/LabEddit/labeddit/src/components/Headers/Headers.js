import React from "react";
import { useNavigate } from "react-router-dom";
import {ContainerHeader} from "./styled"
import { goBack } from "../../routes/Coordinator";


const Headers = () =>{
    const Navigate = useNavigate()
    return(
        <ContainerHeader>
               <button onClick={()=> goBack(Navigate)}>LogOut</button>
        </ContainerHeader>
    )
}

export default Headers