import { Request,Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipeById(req:Request,res:Response){
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token Não enviado")
        }
        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const recipeDb = new RecipeDataBase()
        const recipe = await recipeDb.getRecipesById(req.params.id)

        res.send({
            recipe:{
                id:recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdat:recipe.createdat,
                recipe_id: recipe.recipe_id
            }
            
        })
        
    } catch (error:any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
        
    }
