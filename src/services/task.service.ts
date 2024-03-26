import { ObjectId } from "mongoose";
import Tasks from '../models/task.model'
import { Task } from "../types/task.type";
import boom from'@hapi/boom'

class TaskService {
    // Receive as a parameter data from the frontend as group_id, title, description, start_date, end_date, assigned_to array.
    async create(task: Task) {
        const newTask = await Tasks.create({
            ...task
        }).catch((error) => {
            console.log('Could not save task', error)
        })

        const existingTask = await this.findById((newTask as any)._id)
        return existingTask
    }

    async findById(id: string) {
        const task = await Tasks.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!task) {
            throw boom.notFound('Task not found')
        }

        return task
    }
}

export default TaskService