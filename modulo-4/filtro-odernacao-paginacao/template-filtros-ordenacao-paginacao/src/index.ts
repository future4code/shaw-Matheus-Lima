import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsersbyOrder } from "./endpoints/getAllUserByOrder";
import { getAllUsersPath } from "./endpoints/getNameParams";
import { getAllUsers } from "./endpoints/getNameQuery";

app.get("/recipes", getAllRecipes)
app.get("/users", getAllUsers)
app.get("/users/:name",getAllUsersPath)
app.get("/user-order", getAllUsersbyOrder)