import type {Model} from 'mongoose'
import { User } from './user.type'

export type Group = {
    id?: string,
    name: string,
    description: string,
    creator: User,
    members?: [string],
    moderators?: [string],
    created_at?: Date,
    updated_at?: Date
}

export type GroupModel = Model<Group>