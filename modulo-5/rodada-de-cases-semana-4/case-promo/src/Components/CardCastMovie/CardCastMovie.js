import React from "react"
import img_url from "../../Constants/img_url"




const cardCastMovie = ()=>{
    return <div>
        <img src={`${img_url}/${ator.ator.profile_patch}`} alt="foto-ator"/>
        <p>{ator.ator.name}</p>
        <p>{ator.ator.character}</p>

    </div>
}

export default cardCastMovie