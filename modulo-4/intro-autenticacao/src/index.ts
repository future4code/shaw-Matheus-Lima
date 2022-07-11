import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"

app.post('/signup', createUser)
app.post('/login', login)
app.put('/edit', editUser)
app.get('/profile', getProfile)