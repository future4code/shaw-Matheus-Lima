export default class Animal {
// protected é tipo private só que libera para os filhos usarem as váriaveis 

// private só podem ser acessados pela classe pai 
    name:string
    weight:number

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
        console.log("construindo animalzinho")
      }
    eat(quantity: number): void {
        console.log("the Animal has eaten " + quantity);
      }

}

