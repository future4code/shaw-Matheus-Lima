import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import { Authenticator } from "./services/authenticator";
import { HarshManager } from "./services/hashManager";
import IdGenerator from "./services/idGenerator";


const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new Authenticator(),
    new HarshManager()
)



const userController = new UserController(
    userBusiness
)



app.post("/user/signup", userController.signup)