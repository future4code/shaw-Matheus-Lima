import { Request, Response } from "express";
import UserBussines from "../Bussines/UserBussines";
import UserData from "../data/UserData";
import { userInput } from "../types/user";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body

            const newUser: userInput = {
                name,
                nickname,
                email,
                password,
                role
            }

            // instanciar a classe bussines
            const userBussines = new UserBussines()

            // chamar o metodo de signUp , que esta no bussines e ele retorna um token
            const token = await userBussines.signUp(newUser)

            res.status(201).send({ message: "usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            
         const loginUser = {
            email: req.body.email,
            password: req.body.password
         }
            const loginBussines = new UserData()

            const token = await loginBussines.selectUserByEmail(loginUser.email)

            res.status(200).send({
                message: "Usuário logado!",
                token
        
            })

        } catch (error: any) {
            res.status(500).send(error.message)

        }

    }

   
}

export default UserController