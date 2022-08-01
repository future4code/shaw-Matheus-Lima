import { Request,Response } from "express";
import { ProductBusiness } from "../business/productBusiness";
import { ProductsDTO } from "../types/productsDTO";



export class ProductController{
    
    constructor(private productBusiness:ProductBusiness)
    {}

    createProduct = async(req:Request,res:Response)=>{
        try {
            const {product_name,product_price,product_quantity,product_tag} = req.body

            const inputProduct:ProductsDTO = {
                product_name:product_name,
                product_price:product_price,
                product_quantity:product_quantity,
                product_tag:product_tag
            }
    
            await this.productBusiness.newProduct(inputProduct)
            res.status(201).send("Product registered!")

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