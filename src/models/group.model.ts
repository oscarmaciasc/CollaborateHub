import {Schema, Model, model, Types} from 'mongoose'
import {Group, GroupModel} from '../types/group.type'

const Models = new Schema<Group, GroupModel>({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    creator_id: {
        type: Types.ObjectId,
        required: true,
        unique: true
    },
    members: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    moderators: [{
        type: Types.ObjectId,
        ref: 'User'
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

export default model('Model', Models)