import { Router } from "express";
import { UserBussines } from "../business/userBusiness";
import { UserController } from "../controller/userController";
import UserData from "../data/userData";
import IdGenerator from "../services/IdGenerator";



export const userRouter = Router()

const userBussiness = new UserBussines(
    new UserData(),
    new IdGenerator()
)
const userController = new UserController(userBussiness)

userRouter.post("/signUp", userController.signUp)
userRouter.get("/users", userController.getAllUsers)