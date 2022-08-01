import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { HarshManager } from "./services/HarshManager"

app.post('/signup', createUser)
app.post('/login', login)
app.put('/edit', editUser)
app.get('/profile', getProfile)



// chamando hashManage com a classe new HarshManager no services
// const hashManage = new HarshManager()

// criando a senha do hash e a tentativa de senha para testar
// const teste  = async ()=>{
//     const senha = "12345"
// const senhaTentativa = "123456"

// passando a senha para o hashManage 
// const hash = await hashManage.hash(senha)
// console.log(hash)

// testando a senha comparando com a compare do hashManage
// const senhaCorreta = await hashManage.compare(senhaTentativa,hash)

// console.log("senha Correta", senhaCorreta)

// }

// teste()
