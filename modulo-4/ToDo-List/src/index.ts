import app from "./app";
import connection from "./connection"
import { Request, Response } from "express"


app.post('/registration', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nickname, email } = req.body

            
        console.log(req.body)

        await connection("Users")
            .insert({
              
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })

        res.status(201).send("Criado Com sucesso!")

    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error occurred")

    }

})