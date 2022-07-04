import taskData from "../data/TaskData"
import { generateId } from "../services/idGenerator"
import {  tasks } from "../types/task"

export class TaskBussiness{

    async create(task: tasks){

        const { title, description, task_id} = task

        if (!title || !description || !task_id){
           throw new Error('"title", "description" e "task_id"  são obrigatórios')
        }
        
        const id: string = generateId()

        const taskDb = new taskData()
        
         const taskDbb = await taskDb.insertTask({
            title,
            description,
            task_id,
             id
        })



        return taskDbb
     
        
      
    }

    async getTask(id:string){

        
        const taskdbInfo = new taskData()
        const tasks = taskdbInfo.selectTaskById(id)
        
        if (!tasks) {
            throw new Error("Tarefa não encontrada")
         }
        return tasks
         



       
    }


}
