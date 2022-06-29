import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getProfile(req: Request, res: Response){
    try{
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token não enviado")
        }
        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        // if(data.role !== "Normal"){
        //     throw new Error("Usuário Não autorizado!")
        // }
        
        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        res.send({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}