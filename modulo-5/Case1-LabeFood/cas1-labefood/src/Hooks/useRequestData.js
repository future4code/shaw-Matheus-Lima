import { useEffect, useState } from "react"
import axios from "axios"

export const useRequestData = (initialState,url)=>{
    const [data,setData]= useState(initialState)

    const getData = async()=>{
        await axios.get(url,{
            headers:{
                auth:window.localStorage.getItem("token")
            }
            .then((res)=>{
                setData(res.data)
            }).catch((error)=>{
                console.log(error.response.data.message)
            })
        })
    }
    useEffect(()=>{
        getData()
    },[])

}

return [data]