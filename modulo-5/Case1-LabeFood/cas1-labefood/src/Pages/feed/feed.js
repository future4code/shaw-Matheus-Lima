import React from "react";
import {useProtectedPage} from "../../Hooks/UseProtectedPage";



const Feed =()=>{
    useProtectedPage()
    
    return(
        <div>feed</div>
    )
}

export default Feed