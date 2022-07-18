import dotenv from "dotenv"
import { AddressInfo } from "net";
import express,{Express} from "express"
import cors from "cors"

dotenv.config();


export const app: Express = express();

app.use(express.json())
app.use(cors())

const server = app.listen(3003,()=>{
    if(server){
        const adress  = server.address() as AddressInfo;
        console.log("servidor rodando na porta 3003")
    }else{
        console.log("server is not available")
    }
})