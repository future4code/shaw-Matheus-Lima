import { Request, Response } from "express"
import { connect } from "http2";
import app from "./app";
import connection from "./connection";


app.get('/actor-gender', async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(
            `SELECT COUNT(*),gender FROM Actor GROUP BY gender `)
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Ah unexpected error occurred")
    }
})


app.put('/salary/:id', async (req: Request, res: Response) => {
    try {
        await connection('Actor')
            .update({
                salary: req.body.salary
            })
            .where({ id: req.params.id })

        res.status(200).send("Salário atualizado")


    } catch (error: any) {
        res.send(error.message)

    }
})


app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {

        await connection('Actor')
            .delete()
            .where({ id: req.params.id })

        res.status(200).send("Ator Deletado!")

    } catch (error) {

    }
})


app.get('/actor/salary/:gender', async (req: Request, res: Response) => {
    try {
        await connection.raw(`SELECT AVG(salary) 
      FROM Actor GROUP BY gender`)
        res.status(200).send("Média Salarial:")
    } catch (error) {

    }
})


app.get('/actor', async (req: Request, res: Response) => {
    try {
        const genero = req.query.gender

        const [result] = await connection.raw(
            `SELECT COUNT(*),gender FROM Actor WHERE gender = ${genero} `)

        res.send(result)
        console.log("Sucesso!")

    } catch (error) {

    }

})

const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };


app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });





