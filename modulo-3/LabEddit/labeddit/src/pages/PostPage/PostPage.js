import React from "react";
import Headers from "../../components/Headers/Headers";
import useProtectPage from "../../hooks/useProtectPage";
import {useParams} from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import { Base_URL } from "../../constants/urls";
import CardPost from "../../components/CardPost/CardPost";
const PostPage = () =>{
    useProtectPage()
    const params =  useParams()
    const postCardUp = useRequestData([],`${Base_URL}/posts/${params.id}/comments`,)
    const getPosts = postCardUp[0].map((post)=>{
        
        return(<CardPost
            key={post.id}
            postId={post.postId}
            username={post.username}
            body={post.body}
            voteSum={post.voteSum}
            userId={post.userId}
            userVote={post.userVote}/>

        
        )
    })

    





    console.log(postCardUp)
    return( <div>
        <Headers/>
        {getPosts}
      </div>
    )
}

export default PostPage 