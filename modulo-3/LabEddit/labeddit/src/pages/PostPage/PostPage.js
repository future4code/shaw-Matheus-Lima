import React from "react";
import Headers from "../../components/Headers/Headers";
import useProtectPage from "../../hooks/useProtectPage";

const PostPage = () =>{
    useProtectPage()
    return(
        <div>
            <Headers/>
            <input>Escreva seu post</input>
            <button>Postar</button>
        </div>
    )
}

export default PostPage