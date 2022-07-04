import { Request, Response } from "express";
import { TaskBussiness } from "../Bussines/TaskBussines";
import taskData from "../data/TaskData";
import {  tasks } from "../types/task";


class taskConstroller{

    async create(req:Request, res:Response){
        try {

            const { title, description, task_id} = req.body

            const newTask:tasks = {
                title,
                description,
                task_id,
            }

            const createTask = new TaskBussiness()
            const token = createTask.create(newTask)
            console.log(newTask)

            res.status(201).send({message:"tarefa criada"})


            
        } catch (error:any) {
            res.status(500).send(error.message)
        }
    }

    async selectTask(req:Request, res:Response){
        try {

            const {id} =  req.params

            console.log(id)
            
            const resultado =  new TaskBussiness()
            
            const result = await resultado.getTask(id)
            
           

             res.status(200).send(result)


            
        } catch (error:any) {
            res.status(400).send(error.message)
            
        }
    }

}

export default taskConstroller