import React from "react";
import Headers from "../../components/Headers/Headers";
import useProtectPage from "../../hooks/useProtectPage";
import {useParams} from "react-router-dom"

const PostPage = () =>{
    useProtectPage()
    const params =  useParams()
    
    return(<div>
            <Headers/>
            
            <button>Postar</button>
        </div>
    )
}

export default PostPage