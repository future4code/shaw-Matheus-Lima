import ProductSale from "../model/ProductSale";
import registeredUser from "../model/ProductSale";
import { BaseDatabase } from "./BaseDataBase";

// modelo do produto importar do model

export class ProductData extends BaseDatabase{
    constructor(
        private TABLE_NAME:string = "products_table"
    ){
        super()
    }


    insertProduct =  async  (newProducts: registeredUser)=>{
        try {
            await this.connection(this.TABLE_NAME).insert(newProducts)
            
        } catch (error:any) {
            throw new Error(error.sqlMessage)
            
        }
    }

    selectProductById = async(id:string)=>{
        try {
            const [result] = await this.connection(this.TABLE_NAME)
            .select('*')
            .where({id})
            return result
            
        } catch (error:any) {

            throw new Error(error.sqlMessage)
            
        }
        
    }




}