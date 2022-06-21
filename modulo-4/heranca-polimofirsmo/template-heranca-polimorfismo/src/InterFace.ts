export interface Cliente {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}


export default class Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number) {
            

    }
    public calculateBill(): any {
        return {
            registration: this.registrationNumber,
            consumedEnergy: this.consumedEnergy
        }

    }

}


