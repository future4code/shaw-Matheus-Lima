import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../../components/Headers/Headers";
import { goPostPage } from "../../routes/Coordinator";

const FeedPage = () =>{
    const Navigate = useNavigate
    return(
        <div>
            <Headers/>
            FeedPage


            <button>Postar</button>
        </div>
    )
}

export default FeedPage