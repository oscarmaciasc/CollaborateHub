import type { Model, ObjectId } from 'mongoose'

export type User = {
    id?: ObjectId,
    username: String,
    email: String,
    password: String,
    profile: {
        firstName: String,
        lastName: String,
        avatar?: String,
        bio?: String,
    },
    created_at?: Date,
    updated_at?: Date
}

export type UserModel = Model<User>