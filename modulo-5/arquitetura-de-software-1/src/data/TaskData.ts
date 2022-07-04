import { connection } from "../connection";





class taskData {

    public async  selectTaskById(id: string){
        const result = await connection('tasks')
        .select('*')
        
        .where({id})
     
        return result[0]
     }


    public async insertTask(task:any) {
        await connection('tasks')
            .insert({
                title: task.title,
                description: task.description,
                task_id:task.task_id,
                id: task.id,
             })
    }



}


export default taskData