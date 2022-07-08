import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/authenticator";
import { HarshManager } from "../services/hashManager";
import { SignUpInputDTO } from "../types/signupDTO";
import IdGenerator from "../services/idGenerator";
import { compare } from "bcryptjs";



export default class UserBusiness{
    constructor(
       private userData:UserData,
       private idGenerator:IdGenerator,
       private authenticator:Authenticator,
       private harshManager:HarshManager,
        ){
    }
    
    signup = async(input:SignUpInputDTO)=>{
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error("Campos Invalidos")
        }
        const registeredUser = await this.userData.findbyEmail(email)
        //validação
        if(registeredUser){
            throw new Error("Email já cadastrado")
        }
        // conferir se o usuário existe
        // criar uma id para o usuário 
        const id = this.idGenerator.generateId()
        // hashear o password
        const hashedPassword = await this.harshManager.hash(password)
        // criar o usuário no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.insert(user)
        // criar o token
        const token =this.authenticator.generateToken({id})
        // retornar o token
        return token  
    }

        login = async(log:SignUpInputDTO)=>{
            const {email,password} = log

           const passwordIsCorrect:boolean = await compare(password,email)

           if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }
        if (passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }
        const user = this.userData.findbyEmail(email)
    
        const token = this.authenticator.generateToken({id:(await user).id})
            return token

        }


           
        }
