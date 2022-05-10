import { Navigate } from "react-router-dom"

export const goToFeedPage = (Navigate) =>{
    Navigate("/Login/Feed")    
}

export const goBack = (Navigate) =>{
    Navigate(-1)

}

export const goPostPage = (Navigate,id) =>{
    Navigate(`/Feed/Post/${id}`)
}

export const goSignupPage = (Navigate) =>{
    Navigate("/Login/SignUp")
}