import axios from "axios";
import { Base_URL } from "../constants/urls";

const auth = { headers: { Authorization: localStorage.getItem("token") } };

export const voteUpComment = (id) => {
  const body = {
    direction: 1,
  };
  axios
  .post(`${Base_URL}/comments/${id}/votes`,body,auth)
  .then(()=>{
      window.location.reload()
  }).catch((err)=>{console.log(err.response.data)})
};

export const voteDownComment = (id) =>{
    const body = {
        direction: -1
    }
    axios
    .post(`${Base_URL}/comments/${id}/votes`,body,auth)
    .then(()=>{
        window.location.reload()
    }).catch((err)=>{
        console.log(err.response.data)
    })
}

export const VoteDelComment = (id) =>{
        axios
        .delete(`${Base_URL}/comments/${id}/votes`,auth)
        .then(()=>{
            window.location.reload()
        }).catch((err)=>{
            console.log(err.response.data)
        })
}


export const voteUpPost = (id) => {
    const body = {
      direction: 1,
    };
    axios
    .post(`${Base_URL}/posts/${id}/votes`,body,auth)
    .then(()=>{
        window.location.reload()
    }).catch((err)=>{console.log(err.response.data)})
  };

  export const voteDownPost = (id) =>{
    const body = {
        direction: -1
    }
    axios
    .post(`${Base_URL}/posts/${id}/votes`,body,auth)
    .then(()=>{
        window.location.reload()
    }).catch((err)=>{
        console.log(err.response.data)
    })
}


export const VoteDelPosts = (id) =>{
    axios
    .delete(`${Base_URL}/posts/${id}/votes`,auth)
    .then(()=>{
        window.location.reload()
    }).catch((err)=>{
        console.log(err.response.data)
    })
}


