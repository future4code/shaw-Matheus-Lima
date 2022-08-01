export default class ProductSale {
    constructor(
        private id: string,
        private product_name: string,
        private product_price: number,
        private product_quantity: number,
        private product_tag:string
    ) { }

    public getId() {
        return this.id
    }

    public getProductName() {
        return this.product_name
    }
    public getProductPrice() {
        return this.product_price
    }
    public getProductQuantity() {
        return this.product_quantity
    }
    public getProductTag(){
        return this.product_tag
    }

  
} 