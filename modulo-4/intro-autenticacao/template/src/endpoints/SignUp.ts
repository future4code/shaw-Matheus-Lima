import { Request, Response } from "express";
import GenereateId from "../services/GenerateId";
import generateToken from "../services/GenerateToken";
import createUser from "./createUser";


export default async function signUp(req: Request, res: Response) {
    try {

        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        const id = GenereateId()

        await createUser(userData.email, userData.password)
        const token = generateToken(id)
        res.status(200).send({token})

    } catch (error: any) {
res.status(500).send(error.message)


    }



}