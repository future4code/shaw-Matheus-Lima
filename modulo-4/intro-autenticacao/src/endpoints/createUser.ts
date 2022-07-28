import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { HarshManager } from "../services/HarshManager";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password , role } = req.body
   
      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const userDB = new UserDatabase()
      const user = await userDB.getByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const generate = new Generate()
      const id: string = generate.generateId()

      const hashManage = new HarshManager()
      const hash = await hashManage.hash(password)

      const newUser: user = { id, name, nickname, email, password:hash, role }

      await userDB.create(newUser)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({id,role})

      const newUser1 = {
         id,name ,nickname,email, role
      }

      res.status(201).send({ newUser1, token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message || error.sqlmessage })
      } else {
         res.send({ message: error.message })
      }
   }
}