import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(()=> {
        axios.get(url, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
        .then((response)=> {
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
            //alert('Erro! Tente novamente.')
        })
    }, [url])

    return [data]
}