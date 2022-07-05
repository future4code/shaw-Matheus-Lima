import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignUpInputDTO } from "../types/SignupDTO";

export default class UserController {
constructor(private userBusiness:UserBusiness){

}

    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignUpInputDTO={
            name,
            email,
            password
            
        }

        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message:"usuário cadastrado com sucesso!",token})
        } catch (error:any) {
            
            
        }






    }
}