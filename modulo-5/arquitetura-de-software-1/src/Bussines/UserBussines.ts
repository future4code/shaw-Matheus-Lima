import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, userInput } from "../types/user";
import { compare } from "bcryptjs";
import UserData from "../data/UserData";

class UserBussines {

    // metodo da classe
    async signUp(user: userInput) {

        const { name, nickname, email, password, role } = user

        // 1 regra de negocio - validar os valores 
        if (
            !name ||
            !nickname ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        // 2 regra de negocio - gerar meu id 
        const id: string = generateId()

        // 3 regra de negocio - fazer o hash da senha
        const cypherPassword = await hash(password);


        // 4 regra de negocio - inserir os valores no banco de dados
        const userData = new UserData()

        await userData.insertUser({
            id,
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        })

        // 5 regra de negocio - gerar o token
        const token: string = generateToken({
            id,
            role: role
        })

        return token

    }

    // metodo da classe
    async login(user: user) {


        const { email, password } = user


        const passwordIsCorrect: boolean = await compare(password, user.password)
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token
    }


    async createTask(){
        
    }

}

export default UserBussines