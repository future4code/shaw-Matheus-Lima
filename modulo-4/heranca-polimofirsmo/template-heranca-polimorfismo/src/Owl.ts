import Animal from "./Animal";

export class Owl extends Animal {
  chirp(): void {
    console.log("Hu Hu 🦉");
  }

  fly(quantity: number): void {
    console.log("the owl has flown for " + quantity + " minutes");
  }
}