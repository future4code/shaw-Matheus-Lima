import axios from "axios";
import { baseURL } from "./baseURL";


type user = {
    id: string,
    name: string
}



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
     try {
        const request = ids.map(id =>
         axios.post(`${baseURL}/notifications`,{
            subscriberId:id,
            message:"Alooo"
        }))
        await Promise.all(request)
        console.log(`Nova Notificação`)
        } catch (error:any) {
            console.log(`Erro ao enviar`)  
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

