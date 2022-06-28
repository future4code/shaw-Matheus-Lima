import Place from "./Place";

export class Residence extends Place {
  constructor(
    protected residentQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getMoradores(): number {
    return this.residentQuantity
  }
}