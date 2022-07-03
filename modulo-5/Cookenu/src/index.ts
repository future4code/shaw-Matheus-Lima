import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import getOtherProfile from "./endpoints/getOtherProfile"
import { createRecipe } from "./endpoints/createRecipe"
import getRecipeById from "./endpoints/getRecipebyId"


app.post('/signup', createUser)
app.post('/create-recipes',createRecipe)
app.post('/login', login)
app.put('/edit', editUser)
app.get('/profile', getProfile)
app.get('/other-Profile/:id', getOtherProfile )
app.get('/recipe/:id',getRecipeById)



