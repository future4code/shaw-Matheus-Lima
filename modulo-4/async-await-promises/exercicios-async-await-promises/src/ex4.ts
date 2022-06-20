//Vamos continuar as nossas funcionalidades da API. 
// Crie uma função que permita criar uma nova notícia.

import Axios from "axios"
import { baseURL } from "./baseURL"


//a. Qual é o tipo dessa função? Por quê?



const CreateNews  = async(title:string,content:string, date:number):Promise<void> =>{
   const response = await Axios.put(`${baseURL}/news`,{
    title:title,
    content:content, 
    date:date
   })
   console.log(response)
   
   
   }
   

CreateNews(
    "Capivara encontrada dirigindo um caminhão",
    "Para a alegria de muitos, e a tristeza de alguns, a capivara se encontra bem e com saúde",
    222255
   )


