import axios from "axios"
import { baseURL } from "./baseURL"



// Agora, vamos melhorar um pouco a nossa função, 
// criando uma tipagem que represente os assinantes da nossa aplicação. 
// No nosso caso, eles possuem um id, name e email, como indicado abaixo:


// *a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , 
// teremos algum erro de tipagem?
// não 

// b. É boa prática fazermos um mapeamento do resultado de uma Promise, 
// caso seja indicado que ela retorne um `Promise<any>`. E
// xplique com as suas palavras o porquê de fazermos isso

// caso seja um array sim, mas caso não vai dar erro.


// c. Reimplemente a função, corretamente.

type user  = {
    id:string,
    name:string,
    email:string
}




const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }

    })
}
