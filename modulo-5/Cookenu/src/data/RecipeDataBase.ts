import { BaseDatabase } from "./BaseDatabase";
import Knex from "knex";
import { recipe } from "../types";

export class RecipeDataBase extends BaseDatabase {

    public createRecipe = async (newRecipe: recipe) => {
        await this.getConnection()
            ('recipes')
            .insert(newRecipe)
    }

    public getRecipes = async (id: string) => {
        await this.getConnection()
            ('recipes')
            .select("id", "title", "description", "createdat", "recipe_id")
            .from('recipes')
            .where({ id })
    }


}