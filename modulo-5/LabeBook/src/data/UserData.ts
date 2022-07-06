import User from "../model/User"
import { FindByEmailResponse } from "../types/FindByEmailResponse"
import { BaseDataBase } from "./BaseDataBase"



export default class UserData extends BaseDataBase {
    protected TABLE_NAME = "labook_users"
    insert = async (user: User) => {
        try {
            await
                this.
                connection(this.TABLE_NAME)
                .insert(user)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)

        }

    }

    findbyEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await
                this
                .connection(this.TABLE_NAME)
                    .select()
                    .where({ email })
            return queryResult[0]

        } catch (error: any) {

            throw new Error(error.sqlMessage || error.message)

        }
    }

}