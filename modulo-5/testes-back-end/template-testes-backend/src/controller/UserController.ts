import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserController {
  
   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await new UserBusiness(
            new UserDatabase,
            new IdGenerator,
            new HashGenerator,
            new TokenGenerator

         ).signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error ) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await new UserBusiness(
            new UserDatabase,
            new IdGenerator,
            new HashGenerator,
            new TokenGenerator
            ).login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }


   public async getUserById(req:Request, res:Response) {
      try {
         const id = req.params.id
         const result = await new UserBusiness(
            new UserDatabase,
            new IdGenerator,
            new HashGenerator,
            new TokenGenerator
            ).getUserId(id)
            res.status(200).send(result)
      } catch (error) {
         const{statusCode,message} = error
         res.status(statusCode || 400).send({message})
         
      }
     
  }

}
