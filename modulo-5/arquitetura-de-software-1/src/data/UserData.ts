import { connection } from "../connection"
import { user } from "../types/user"

class UserData{

   async insertUser(user: user){
        await connection.insert({
           id: user.id,
           name: user.name,
           nickname: user.nickname,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('User_Arq')
     }



    public async selectUserByEmail(email: string){
         const result = await connection("User_Arq")
            .select("*")
            .where({ email })
   
         return {
            id: result[0].id,
            role: result[0].role
         }}

       
}

export default UserData