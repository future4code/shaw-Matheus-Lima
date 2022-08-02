import { Request,Response } from "express";
import { ProductBusiness } from "../business/productBusiness";
import IdGenerator from "../services/IdGenerator";
import { ProductsDTO } from "../types/productsDTO";



export class ProductController{
    
    constructor(
        private productBusiness:ProductBusiness,
        private idGenerator:IdGenerator
        )
    {}

    createProduct = async(req:Request,res:Response)=>{
        try {

            
            let {id, product_name,product_price,product_quantity,product_tag} = req.body
            
            id = this.idGenerator.generateId()

            const inputProduct:ProductsDTO = {
                id: id,
                product_name:product_name,
                product_price:product_price,
                product_quantity:product_quantity,
                product_tag:product_tag
            }
    
            await this.productBusiness.newProduct(inputProduct)
            res.status(201).send({message:"Product Registered", inputProduct})

        } catch (error:any) {
            res.send(error.message)
            
        }
       

    }

    getProductsById =  async (req:Request,res:Response)=>{
        try {

            const id:string = req.params.id
            const getProducts = await this.productBusiness.getProductId(id)
            res.status(200).send(getProducts)
            
        } catch (error:any) {
            res.status(400).send(error.message)
            
        }
        
    }


}