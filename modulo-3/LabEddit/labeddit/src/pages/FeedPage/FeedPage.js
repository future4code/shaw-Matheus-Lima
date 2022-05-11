import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectPage from "../../hooks/useProtectPage";
import { goPostPage } from "../../routes/Coordinator";
import Headers from "../../components/Headers/Headers";


const FeedPage = () =>{
    const Navigate = useNavigate
    useProtectPage()
    return(
        <div>  
            <Headers/>
            
            FeedPage


            <button>Postar</button>
        </div>
    )
}

export default FeedPage