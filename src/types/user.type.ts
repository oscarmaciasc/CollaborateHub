import type { Model } from 'mongoose'

export type User = {
    id?: string,
    username: string,
    email: string,
    password: string,
    profile: {
        firstName: string,
        lastName: string,
        avatar?: string,
        bio?: string,
    },
    created_at?: Date,
    updated_at?: Date
}

export type UserModel = Model<User>