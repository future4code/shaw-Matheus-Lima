import { Dog } from "./Dog";
import { Owl } from "./Owl";
import User from "./User";
import Customer from "./Customer";
import  Client  from "./InterFace";
import  Place  from "./Place";
import { Industry } from "./Industry";
import { Commerce } from "./Commerce";
import { Residence } from "./Residence";


const scooby = new Dog("Scooby",20 , "chiwaua")
scooby.bark()
scooby.eat(5)


const edwiges = new Owl("Edwiges", 2)

edwiges.fly(5)
edwiges.eat(10)
edwiges.chirp()


const User1 = new User("2","Frederica@gmail.com","Frederica","123456")
const Customer1 = new Customer("1", "sabrinafeiticeira@gmail.com","Sabrina Pires","sabrinaSabrineira","Black")

// console.log(User1.getId(),User1.getName(),User1.getEmail())
// console.log(Customer1.getId(),Customer1.getEmail(),Customer1.getName())



const Cliente1 = new Client("João" , 123123,200)
// console.log(Cliente1.calculateBill())

const lugar1 = new Place("123123123123")

console.log(lugar1)

const Residence1 = new Residence(75,"84848484")

console.log(Residence1.getCep())

const Commerce1 = new Commerce(12,"40404029")

const industry1 = new Industry(35,"9283971723")