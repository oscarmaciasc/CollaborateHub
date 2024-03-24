import {Schema, model} from 'mongoose'
import {User, UserMethods, UserModel} from '../types/user.type'
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '../utils/constants'

export const USER_REFERENCE = 'User'

const Users = new Schema<User, UserModel, UserMethods>({
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
        index: true,
        match: [EMAIL_REGEX, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        match: [PHONE_NUMBER_REGEX, 'Please enter a valid phone number']
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

Users.methods.toClient = function () {
    return {
        id: this._id as unknown as string,
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        profile: {
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            avatar: this.profile.avatar,
            bio: this.profile.avatar
        }
    }
}

export default model(USER_REFERENCE, Users)
