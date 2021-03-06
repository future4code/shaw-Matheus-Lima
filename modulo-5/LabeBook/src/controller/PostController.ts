import { Request,Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { CreateDTO } from "../types/createDTO";


export default class PostController{
    constructor(private postBusiness:PostBusiness){
    }

    create = async (req:Request,res:Response)=>{

        const token = req.headers.authorization as string

        const {photo,descrition,type,author_id} = req.body

        const createPost:CreateDTO = {
            photo,
            descrition,
            type,
            author_id 
        }
        try {
            
            const token = await this.postBusiness.create(createPost)
            res.status(201).send({message:"Post Criado",token})

            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }

    }


    getPostById = async (req:Request,res:Response) =>{
        const id:string = req.params.id as string
        const token = req.headers.authorization as string
        try {
         const result = await this.postBusiness.getPost(id)
         res.status(200).send({result})
         console.log(result)  
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)     
        }
}




   



    }





