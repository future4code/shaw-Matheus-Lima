import { Router } from "express";
import { UserBussines } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";



export const userRouter = Router()

const userBussiness = new UserBussines()
const userController = new UserController(userBussiness)

userRouter.post("/signUp",userController.signUp)
userRouter.get("/users",userController.getAllUsers)