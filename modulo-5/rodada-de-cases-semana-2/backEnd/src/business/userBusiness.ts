import UserData from "../data/userData";
import  RegisteredUser  from "../model/registeredUser";
import IdGenerator from "../services/IdGenerator";
import { SignUpDTO } from "../types/SignUpDTO";


export class UserBussines{
    
    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator
        ){}

        inputSignup = async (inputUser: SignUpDTO)=> {
            const{firstName,lastName,participation} = inputUser

             const  id = this.idGenerator.generateId()

             const newCubeUser = new RegisteredUser(
                id,
                firstName,
                lastName,
                participation
             )

             await this.userData.insertUser(newCubeUser);
         }
         
         
         getallRegistredUsers = async()=> {
             let registerUser = await this.userData.selectUsers()
             return registerUser;
            }
            
            
        }

