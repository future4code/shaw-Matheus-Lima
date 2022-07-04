import { app } from "./app"
import TaskController from "../controller/TaskController"
import UserController from "./UserController"

const userController = new UserController()
const taskController = new TaskController()



app.post('/user/signup', userController.signUp)
app.post('/user/login', userController.login)
// app.get("/allUser",userController.getUsers)

app.post('/task',taskController.create)
app.get('/task/:id', taskController.selectTask)



