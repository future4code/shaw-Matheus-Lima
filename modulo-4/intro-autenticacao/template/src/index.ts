import app from "./app"
import createUser from './endpoints/createUser'
import SignUp from "./endpoints/SignUp"

app.post('/user/signup', createUser)
app.post('/login',SignUp)