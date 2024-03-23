import {Schema, model, Types} from 'mongoose'
import {Task, TaskModel} from '../types/task.type'

const Tasks = new Schema<Task, TaskModel>({
    group_id: {
        type: Types.ObjectId,
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
        type: Types.ObjectId,
        ref: 'User',
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

export default model('Task', Tasks)