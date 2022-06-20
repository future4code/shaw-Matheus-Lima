import axios from "axios"
import { baseURL } from "./baseURL"


console.log("Hello World!")

// Exercício 1
// Vamos começar fazendo uma função nomeada simples 
// que retorne todos os assinantes da nossa aplicação. 
// Ela deve ser assíncrona, porque utiliza o async para fazer a comunicação com o banco de dados. 
// Além disso, por ora, indique que ela vai retornar um array de "qualquer coisa"

// Lembre-se de criar uma função "main" para testar suas funções assíncronas

// a. Qual endpoint você deve utilizar para isso ?
// Get 

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// função nomeada e o tipo é <Promise<any[]>


//c.



const getSubscribers = async():Promise<any[]> =>{
    const response = axios.get(`${baseURL}/subscribers`)
    return (await response).data
}




const main = async () => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
      
       
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()














