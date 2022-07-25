import { Request, Response } from "express";
import { UserBussines } from "../business/UserBusiness";
import { SignUpDTO } from "../types/SignUpDTO";

export class UserController{
    
    constructor(
        private userBussiness:UserBussines
    ){}

    signUp = async(req:Request,res:Response)=>{
   const {firstName,lastName,participation} = req.body
   try {
    const inputUser:SignUpDTO = {
        firstName:firstName,
        lastName:lastName,
        participation:participation 
    }
    const token = await this.userBussiness.inputSignup(inputUser)
    res.status(201).send({message:"Usuário foi registrado obrigado pela participação",token})
    
   } catch (error:any) {
    res.send(error.message)
    
   }
}

getAllUsers = async(req:Request,res:Response)=>{
    try {

        const getuser = await this.userBussiness.getallRegistredUsers()
        res.status(200).send(getuser)
        
    } catch (error:any) {
        res.status(400).send(error.message)
        
    }
   
}




}

