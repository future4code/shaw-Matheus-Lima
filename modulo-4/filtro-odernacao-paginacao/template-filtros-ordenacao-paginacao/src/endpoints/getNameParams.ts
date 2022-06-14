import { Request,Response } from "express"
import { connection } from "../data/connection"


export const getAllUsersPath = async(req: Request,res: Response): Promise<void> =>{
    try {
        let name = req.params.name
       const users = await connection("aula48_exercicio")
       .select()
       .where("name", "like", `%${name}%`)

 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }