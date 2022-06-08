a) Explique como é a resposta que temos quando usamos o raw. 
Ele retorna todas as informações do tony ramos 


b) Faça uma função que busque um ator pelo nome;

app.get("/users/:name", async (req:Request, res:Response) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name))

        res.end()

    } catch (error: any) {

    }
})

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*


app.get('/actor-gender',async (req:Request,res:Response)=>{
    try {
        const [result] = await connection.raw(
            `SELECT COUNT(*),gender FROM Actor GROUP BY gender `)
            res.status(200).send(result)
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Ah unexpected error occurred")
    }
})

##

*Exercicio 2*


a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

app.put('/actor/salary/:id', async(req:Request, res:Response) =>{
try {
    const result = await connection('Actor')
    .update({
        salary:req.body.salary
    })
    .where({id:req.params.id})

    res.status(200).send(result)

    
} catch (error:any) {
    
}


})

b) Uma função que receba um id e delete um ator da tabela

app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {

        const result = await connection('Actor')
            .delete()
            .where({ id: req.params.id })

        res.status(200).send(result)

    } catch (error) {

    }
})

c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender







