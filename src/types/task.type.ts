import type {Model, ObjectId, Types} from 'mongoose'

export type Task = {
    id?: ObjectId,
    group_id: ObjectId, // Reference to the group associated with the task
    title: String,
    description: String,
    start_date: Date,
    end_date: Date,
    assigned_to?: Types.ObjectId[],
    created_at?: Date,
    updated_at?: Date
}

export type TaskModel = Model<Task>