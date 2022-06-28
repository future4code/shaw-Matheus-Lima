
import Client from "./InterFace";
import { Residence } from "./Residence";


export default class ResidentialClient extends Residence implements Client {

    constructor(
        public name :string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentQuantity: number,
        cep: string,
        ) {
        super(residentQuantity, cep,)

    }
    public getcpf():string{
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

}