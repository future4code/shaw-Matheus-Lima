import { compare, genSalt, hash } from "bcryptjs"


export class HarshManager {

  public hash = async (password: string) => {

    const rounds = Number("12")

    const salt = await genSalt(rounds)

    const result = await hash(password, salt)

    console.log("encrypetd menssage:", result)
    return result


  }

  compare = async (password: string, hash: string) => {
    const result = await compare(password, hash)
    return result
  }
}