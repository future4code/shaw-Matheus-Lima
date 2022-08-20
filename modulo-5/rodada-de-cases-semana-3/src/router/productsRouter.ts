import { Router } from "express";
import { ProductBusiness } from "../business/productBusiness";
import { ProductController } from "../controller/productController";
import { ProductData } from "../data/productData";
import IdGenerator from "../services/IdGenerator";

export const productsRouter = Router()


const productBusiness = new ProductBusiness( 
    new ProductData(),
    new IdGenerator()
)

const productController = new ProductController(productBusiness, new IdGenerator)


productsRouter.post("/create", productController.createProduct)
productsRouter.get("/products/:id", productController.getProductsById)