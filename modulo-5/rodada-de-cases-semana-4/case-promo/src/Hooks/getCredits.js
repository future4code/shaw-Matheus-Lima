import axios from "axios"
import { useEffect, useState } from "react"
import {api_key} from "../Constants/api_Key"
import {BASE_URL} from "../Constants/BASE_URL"


export const getCredit = (id,location)=>{
    const [cast, setCast] = useState([])
    const [group, setGroup] = useState([])
    useEffect(()=>{
        axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${api_key}&language=en-US`)
        .then((res)=>{
            console.log(res.data)
            setCast(res.data.cast)
            setGroup(res.data.group)
        })
        .catch((err)=>{
            console.log(err)

        })
    },[location])
    return[cast,group]
}