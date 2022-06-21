import Animal from "./Animal";

export class Dog extends Animal {

  raca:string
  constructor(name:string, weight:number,raca:string){
    super(name,weight) // construtor da classe pai 
    this.raca = raca
    console.log("construindo um cachorrinho")

  }
  
  bark(): void {
    console.log("au au 🐶");
  }

  
}