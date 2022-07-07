import Post from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";



export default class PostData extends BaseDataBase{
protected TABLE_NAME = "labook_posts"
insert = async (post:Post)=>{
    try {
        await this.connection(this.TABLE_NAME)
        .insert(post)

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
        
    }

}

findbyAuthorId = async(author_id:string)=>{
    try {
        const queryResult = await this.connection(this.TABLE_NAME)
        .select()
        .where({author_id})
        return queryResult[0]

        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
        
    }

}






}