import app from "./app";
import connection from "./connection"
import { Request, Response } from "express"
import moment from "moment"

// cria novos usuários
app.post('/registration', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nickname, email } = req.body
        console.log(req.body)

        const id = Math.floor(Date.now() * Math.random()).toString(36)

        if (!name || !nickname || email) { throw new Error("Dados em falta por favor preencha novamente!") }

        await connection("Users")
            .insert({
                id,
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })

        res.status(201).send("Criado Com sucesso!")

    } catch (error: any) {
        switch (error.message) {
            case "Dados em falta por favor preencha novamente!":
                res.status(400)
                break;

            default:
                res.status(500).send("Unexpected error occurred")
                break;
        }
        res.send(error.message)


    }

})

// pega usuários pela id
app.get('/user/:id', async (req, res): Promise<void> => {

    try {
        const { id } = req.params

        if (!id) {
            throw new Error("ID do usuário não encontrado")
        }

        const result = await connection("Users")
            .select("id", "nickname")
            .from("Users")
            .where({ id })
        res.status(200).send(result)

        // if (result.length === 0) {
        //     throw new Error("Id invalido")
        // }

        if (!result) {
            throw new Error("ID do usuário não encontrado")
        }
        if (result === []) {
            throw new Error("Erro usuário não encontrado")
        }

    } catch (error: any) {
        switch (error.message) {
            case "ID do usuário não encontrado":
                res.status(404)
                break;
            case "Erro usuário não encontrado":
                res.status(404)
                break
            case "Id invalido":
                res.status(400)
                break
            default:
                res.status(500).send("Unexpected error occurred")
                break;
        }

        res.send(error.message)

    }
})

// Alterar nome e nickname do usuário
app.put("/user/edit/:id", async (req, res) => {
    try {
        const { name, nickname } = req.body
        const { id } = req.params
        await connection("Users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where({ id: id })
        res.status(200).send("Usuário alterado com sucesso!")

        if (!name || !nickname) {
            throw new Error("Dados para atualizar invalidos")
        }

    } catch (error: any) {
        switch (error.message) {
            case "Dados para atualizar invalidos":
                res.status(400)

                break;

            default:
                res.status(500).send("Unexpected error")
                break;
        }
        res.send(error.message)

    }

})

// endpoint para criar tarefas com id do users
app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body

        if (!title || !description) {
            throw new Error("Dados inválidos Escreva-novamente!")
        }

        const dateDiff: number = moment(req.body.limit_date, "DD/MM/YYYY").unix()
        console.log(dateDiff)

        // if(dateDiff <= 0){
        //     throw new Error ("Impossível criar deadlines que já foram passadas!")
        // }

        const id = Math.floor(Date.now() * Math.random()).toString(36)

        await connection("TodoListTask")
            .insert({
                id,
                title: req.body.title,
                description: req.body.description,
                limit_date: moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                creator_user_id: req.body.createId
            })
        res.status(200).send({
            message: "Tarefa Criada!",
            id

        })


    } catch (error: any) {

        switch (error.message) {
            case "Dados inválidos Escreva-novamente!":
                res.status(400)
                break;

            default:
                res.status(500).send(error.sqlMessage)
                break;
        }

        res.send(error.message)
    }

})


// pega tarefas pelo id 

app.get("/getTask/:id", async (req, res): Promise<any> => {
    try {

        const [result] = await connection("TodoListTask")
        .join('Users', 'TodoListTask.creator_user_id', 'Users.id')
        .select("TodoListTask.*", "Users.id as creatorUserId", "Users.nickname as creatorUserNickname" )
        .where('TodoListTask.id', (req.params.id))

        if (!result) {
            throw new Error("Tarefa não encontrada!")
        }

        res.status(200).send({
            id:result.id,
            title:result.title,
            description: result.description,
            limit_date: moment(result.limit_date,'YYYY-MM-DD').format('DD/MM/YYYY'),
            creator_user_id: result.creator_user_id,
            creatorUserNickname: result.authorNickname
        })

    } catch (error: any) {
        switch (error.message) {
            case "Tarefa não encontrada!":
                res.status(404)
                break;

            default:
                res.status(500).send(error.message || error.sqlMessage)
                break;
        }
        res.send(error.message)

    }

})