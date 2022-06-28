import { Request, Response } from "express"
import connection from "../connection"

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, movie } = req.body

      await connection("character")
         .insert({name, movie})

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}
