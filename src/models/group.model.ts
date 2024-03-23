import {Schema, Model, model, Types} from 'mongoose'
import {Group, GroupModel} from '../types/group.type'
import { USER_REFERENCE } from './user.model'

export const GROUP_REFERENCE = 'Group'

const Groups = new Schema<Group, GroupModel>({
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
        type: String,
        required: true,
        unique: true
    },
    members: [{
        type: String,
        ref: USER_REFERENCE
    }],
    moderators: [{
        type: String,
        ref: USER_REFERENCE
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

export default model(GROUP_REFERENCE, Groups)