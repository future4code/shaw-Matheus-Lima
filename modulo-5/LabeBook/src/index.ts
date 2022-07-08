import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
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

const postBusiness = new PostBusiness(
    new PostData(),
    new IdGenerator(),
    new Authenticator(),
    new HarshManager()
)

const userController = new UserController(
    userBusiness
)
const postControl = new PostController(
    postBusiness
      
)



app.post("/user/signup", userController.signup)
app.post("/user/login",userController.login)
app.post("/create",postControl.create)
app.get("/getpost/:id",postControl.getPostById)