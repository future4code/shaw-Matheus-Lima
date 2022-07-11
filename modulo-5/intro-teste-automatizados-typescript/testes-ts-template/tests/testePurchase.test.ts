import { performPurchase } from "../src/testeUser1"
import User from "../types/user"
describe("Teste exercicio1", ()=>{
test("retorna um usuário com o saldo maior do que valor da compra",()=>{
    const input: User = {
        name: "Jorge",
        balance: 600
    }
    const result = performPurchase(input,300)
    expect(result).toEqual({
        name:"Jorge",
        balance:300
    })
})
})

describe("Teste exercicio2", ()=>{
test("retorna um usuário com saldo igual ao valor da compra",()=>{
    const input:User={
        name:"Jõao",
        balance:70
    }
    const result = performPurchase(input,70)
    expect(result).toEqual({
        name:"Jõao",
        balance:0
    })

})
})

describe("Teste exercicio3", ()=>{
test("retorna um usuário com saldo menor que o valor de compra",()=>{
    const input:User={
        name:"Sabrina",
        balance:200
    }
    const result = performPurchase(input,500)
    expect(result).toBeUndefined
})
})


