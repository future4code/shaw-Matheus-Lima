import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { HarshManager } from "./services/HarshManager"
import getOtherProfile from "./endpoints/getOtherProfile"
import { createRecipe } from "./endpoints/createRecipe"


app.post('/signup', createUser)
app.post('/create-recipes',createRecipe)
app.post('/login', login)
app.put('/edit', editUser)
app.get('/profile', getProfile)
app.get('/other-Profile/:id', getOtherProfile )



// chamando hashManage com a classe new HarshManager no services
const hashManage = new HarshManager()

// criando a senha do hash e a tentativa de senha para testar
// const teste  = async ()=>{
//     const senha = "12345"
// const senhaTentativa = "123456"

// // passando a senha para o hashManage 
// const hash = await hashManage.hash(senha)
// console.log(hash)

// // testando a senha comparando com a compare do hashManage
// const senhaCorreta = await hashManage.compare(senhaTentativa,hash)

// console.log("senha Correta", senhaCorreta)
// }


