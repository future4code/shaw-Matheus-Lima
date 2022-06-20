import axios from "axios"
import { baseURL } from "./baseURL";


// Agora, para treinar um pouco da sintaxe, 
// reescreva a função do exercício 1 utilizando arrow function. 



// *a.* Explique, com suas palavras, a diferença da sintaxe 
// de uma função nomeada assíncrona e uma arrow function assíncrona

// função nomeada é uma que recebe a => arrow function é assicrona é uma que tem function o nome

// const func = async () =>{

//}

// async (params:type) => {
    
// }

// a diferença é que ela já começa com assync 



// b. Implemente a função solicitada, usando arrow function


type user = {
	id: string;
	name: string;
	email: string;
}

async function getSubscribers():Promise<user[]> {
    
    const response = axios.get(`${baseURL}/subscribers`)
    return (await response).data
}

const main =  async() =>{
    try {
        const retorna = getSubscribers()
        console.log(retorna)
        
    } catch (error:any) {
        
    }

}

main()



