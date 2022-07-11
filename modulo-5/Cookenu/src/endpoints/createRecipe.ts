import { Response, Request } from "express";
import moment from "moment";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { recipe } from "../types";


export const createRecipe = async(req:Request,res:Response)=>{
    try {

        const token = req.headers.authorization as string
        const {title, description,} = req.body
        
        
        const generate = new Generate()
        const id: string = generate.generateId()
    
        const createAt : string = moment().format("YYYY-MM-DD")
        
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)
    
        const newCooker:recipe ={
            id:id,
            createdat:createAt,
            description:description,
            recipe_id:authenticationData.id,
            title:title
        }
     
    
        const userDataBase = new RecipeDataBase()
        await userDataBase.createRecipe(newCooker)

        res.status(200).send("Recipe Created")
    }

    catch (error:any) {
        res.status(500).send(error.sqlmessage || error.message)
    }

}
   
