import express, { response } from "express"
import cors from "cors"
import { afazeres } from "./data"
import { afazer } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping",(req,res)=>{
  res.send("pong🏓")
})

app.get("/afazeres",(req,res)=>{
  const tarefas = afazeres.filter((afazer)=>{
    if (afazer.completed === true){
      return afazer
    }
  })
  res.send(tarefas)
  
})

app.post("/criar-tarefa/",(req,res)=>{

 const {userId,id,title,completed}:afazer = req.body

if (!userId || !id || !title || completed){
  response.status(404).send("Dados userId, id, tittle ou completed faltando!, Preencha novamente!") 
}
const criarNovaTarefa = {
  userId:userId,
  id:id,
  title:title,
  completed:completed,

}
afazeres.push(criarNovaTarefa)
res.status(201).send(criarNovaTarefa)



})


app.put ("/afazeres/troca/:idTarefa",(req,res)=>{
    afazeres.find((tarefa)=>{
    if(Number(req.params.idTarefa) === tarefa.id){
      return tarefa.completed = req.body.completed
    }
  })
  res.send(afazeres)
  console.log("Status da Tarefa alterada!")
})


app.delete("/afazeres/:idTarefa", (req, res) => {
  const idTarefa: Number = Number(req.params.idTarefa)

  const afazresdel = afazeres.filter((tarefa) => {
    idTarefa !== tarefa.id
    res.send(afazresdel)
    console.log("Tarefa Deletada!")
  })
})

app.get ("/afazeres/user/:idUser",(req,res)=>{
  const idFiltrado = afazeres.filter((tarefa)=>{
    if(Number(req.params.idUser)===(tarefa.userId)){
      return tarefa
    }
    res.send(idFiltrado)
    console.log("Tarefas filtradas")
  })
})
