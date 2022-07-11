import { compare, genSalt, hash } from "bcryptjs"


export class HarshManager {
    // criando o método de hash
    public hash = async (password: string) => {
        // rounds e o numero do rounds que ele vai receber 12 é padrão mas pode ser mais
        const rounds = Number("12")
        // salt vai receber o rounds com o numero de bcrypt
        const salt = await genSalt(rounds)
        // retornando o resultado da senha que eu receber e do salt na senha 
        const result = await hash(password, salt)

        console.log("encrypetd menssage:", result)
        return result
        

    }
    // função para comparar as senhas 
    compare = async (password: string, hash: string) => {
        const result = await compare(password, hash)
        return result
    }
}