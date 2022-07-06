import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/authData"
export class Authenticator {
    private static EXPIRES_IN = "2h"

    public generateToken = (payload: AuthenticationData) => {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
            })
        return token
    }
    public getData = (token: string): AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return data
    }
}