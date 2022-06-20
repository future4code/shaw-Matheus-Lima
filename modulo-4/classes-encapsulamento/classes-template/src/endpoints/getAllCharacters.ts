import { Request, Response } from "express"
import connection from "../connection"
import { character } from "../types"

export default async function getAllCharacters(
   req: Request,
   res: Response
): Promise<void> {

   try {
      
      const characters: character[] = await connection("character").select()

      res.send(characters)
   } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
   }
}
