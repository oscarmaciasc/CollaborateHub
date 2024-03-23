import {Schema, model, Types} from 'mongoose'
import {Task, TaskModel} from '../types/task.type'
import { USER_REFERENCE } from './user.model'

export const TASK_REFERENCE = 'Task'

const Tasks = new Schema<Task, TaskModel>({
    group_id: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    start_date: {
        type: Date,
        required: true,
        index: true
    },
    end_date: {
        type: Date,
        required: true,
        index: true
    },
    assigned_to: [{
        type: String,
        ref: USER_REFERENCE,
        index: true
    }],
    created_at: {
        type: Date,
        default: Date.now,
        index: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

export default model(TASK_REFERENCE, Tasks)