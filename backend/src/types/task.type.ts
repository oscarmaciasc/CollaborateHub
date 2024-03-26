import type {Model} from 'mongoose'

export type Task = {
    id?: string,
    group_id: string, // Reference to the group associated with the task
    title: string,
    description: string,
    start_date: Date,
    end_date: Date,
    assigned_to?: string[],
    created_at?: Date,
    updated_at?: Date
}

export type TaskModel = Model<Task>