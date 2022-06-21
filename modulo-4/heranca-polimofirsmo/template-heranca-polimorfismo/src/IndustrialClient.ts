import { Industry } from "./Industry";
import Client from "./InterFace";


export default class IndustrialClient extends Industry implements Client{

    constructor(
        public name:string,
        public registrationNumber: number,
        public consumedEnergy:number,
        private industryNumber :number,
        machinesQuantity:number,
        cep:string
    ){
        super(machinesQuantity,cep)
    }
    
    public getIndustryNumber():number{
        return this.industryNumber
    }

    public calculateBill() {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }

}