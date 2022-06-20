import { Request, Response } from "express"
import { connection } from "../data/connection"


//funcionalidade de ordenação que possa receber nome
//ordenação padrão deve ser crescente 
// caso não passe nenhum parametro a ordenação deve ser por email



export const getAllUsersbyOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order
        let sort = req.query.sort
        let type = req.query.type
        let name = req.query.name
        let page = Number(req.query.page)
        let size = 5 
        let offset = size*(page -1);

        if (sort !== "name" && sort !== "type") {
            sort = "email"
        }

        if (order !== "asc" && order !== "desc") {
            order = "asc"
        }

        if(isNaN(offset) || page < 1){
           page = 1
        }

        if(isNaN(page) || size < 1){
            size = 5
        }

        const users = await connection("aula48_exercicio")
            .select()
            .where("type", "like" ,`%${type}%`)
            .where("name", "like", `%${name}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        
        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}