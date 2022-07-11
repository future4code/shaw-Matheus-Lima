import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('User')
            .insert(newUser)

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }): Promise<number> => {
        const affectRows = await this.getConnection()('User')
            .update(columnsUpdate)
            .where({ id })
        return Number(affectRows) 
    }
    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()('User')
            .where({ email }) 
        return result 
    }
    public getById = async (id: string): Promise<user> => {
        const [result] = await this.getConnection()('User')
            .where({ id }) 
        return result 
    }
}