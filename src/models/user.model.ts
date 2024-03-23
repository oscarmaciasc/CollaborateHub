import {Schema, model} from 'mongoose'
import {User, UserModel} from '../types/user.type'

const Users = new Schema<User, UserModel>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        avatar: {
            type: String,
            trim: true
        },
        bio: {
            type: String,
            trim: true
        }
    },
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

export default model('User', Users)
