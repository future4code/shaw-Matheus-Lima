import { Navigate } from "react-router-dom"

export const goToFeedPage = (Navigate) =>{
    Navigate("/Login/Feed")    
}

export const goBack = (Navigate) =>{
    Navigate(-1)

}

export const goPostPage = (Navigate) =>{
    Navigate("/Feed/Post")
}

export const goSignupPage = (Navigate) =>{
    Navigate("/Login/SignUp")
}