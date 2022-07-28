import { BaseDatabase } from "./BaseDataBase";
import RegisteredUser from "../model/registeredUser";


export default class UserData extends BaseDatabase {
    private TABLE_NAME: string = "cube_table"

    constructor() {
        super()
    }

    insertUser = async (inputUser: RegisteredUser) => {
        try {
            await this.connection(this.TABLE_NAME).insert(inputUser)
            
        } catch (error:any) {
            throw new Error(error.sqlMessage)
            
        }
    }
    selectUsers = async () => {
       try {
        let users:RegisteredUser[] = await this.connection(this.TABLE_NAME).select('*')
        let totalParticipation = await this.connection(this.TABLE_NAME).sum('participation as totalParticipation')
        
        let response = {
            users,
            totalParticipation:totalParticipation[0].totalParticipation
        }
        return response
       } catch (error:any) {
        throw new Error(error.sqlMessage)
        
       }
    }

}