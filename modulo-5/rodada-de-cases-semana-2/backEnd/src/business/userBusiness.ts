import UserData from "../data/userData";
import { SignUpDTO } from "../types/SignUpDTO";

export class UserBussines{
    getallRegistredUsers() {
        throw new Error("Method not implemented.");
    }
    inputSignup(inputUser: SignUpDTO) {
        throw new Error("Method not implemented.");
    }

    constructor(
        private userData = new UserData
    ){}

}

