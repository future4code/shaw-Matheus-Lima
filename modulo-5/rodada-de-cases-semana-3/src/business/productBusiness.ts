import { ProductData } from "../data/productData";
import ProductSale from "../model/ProductSale";
import IdGenerator from "../services/IdGenerator";
import { ProductsDTO } from "../types/productsDTO";

export class ProductBusiness {

    constructor(
        private productData: ProductData,
        private IdGenerator: IdGenerator
    ) { }

    newProduct = async (inputProduct: ProductsDTO) => {
        const { id,product_name, product_price, product_quantity, product_tag } = inputProduct

       

        const newProducts = new ProductSale(
            id,
            product_name,
            product_price,
            product_quantity,
            product_tag
        )
        await this.productData.insertProduct(newProducts)

    }

    getProductId = async (id:string) => {

        let registerProduct = await this.productData.selectProductById(id)
        return registerProduct

    }
}