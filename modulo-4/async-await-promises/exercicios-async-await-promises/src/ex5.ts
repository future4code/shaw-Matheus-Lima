import axios from "axios"
import { baseURL } from "./baseURL"

// Agora, implemente uma função que receba um array de usuários 
// e uma mensagem e envie essa mensagem 
// como notificação para todos os usuários. A princípio, não utilize o Promise.all


type subscriber = {
    id: string,
    name: string,
    email: string
}


const getAllSubscribers = async (): Promise<subscriber[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}


const getSubscribersIds = (subscribers: any): string[] => {
    return subscribers.map((subscriber: any) => {
        return subscriber.id
    })
}



const notifySubscriber = async(ids:string[]):Promise<void> =>{
    for(const id of ids){
        try {
        await axios.post(`${baseURL}/notifications`,{
            subscriberId:id,
            message:"Alooo"
        })
        console.log(`Nova Notificação ${id}`)
        } catch (error:any) {
            console.log(`Erro ao enviar ${id}`)  
        }
    }
}
const main = async ():Promise<void> => {
    try {
        
        const subscribers = await getAllSubscribers()
        const subscribersIds = getSubscribersIds(subscribers)
        await notifySubscriber(subscribersIds)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}


main()
