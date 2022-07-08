import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { LoginDto } from "../types/loginDTO";
import {  SignUpInputDTO } from "../types/signupDTO";

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
            throw new Error(error.message)      
        }  
    }

    login = async (req:Request, res:Response) =>{
        const {email,password,name} = req.body

        const logado:LoginDto = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.login(logado)
            res.status(200).send({message:"usuário logado com sucesso!",token})
            
        } catch (error:any) {
            throw new Error (error.sqlmessage || error.message)
            
        }
    }



 

}