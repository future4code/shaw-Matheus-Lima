import { Authentication, user} from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('User')
            .insert(newUser)

    }
    public getByEmail = async (email: string) => {
        const [result] = await this.getConnection()('User')
            .where({ email })
        return result
    }

    public signUp = async(id:Authentication,email:string,password:string)=>{
        await this.getConnection()
        (`User`)
        .insert({id,email,password})
    }


  
}