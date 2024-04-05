import type {Model} from 'mongoose'
import { UserProfile } from './user.type'

export type Group = {
    id?: string,
    name: string,
    description: string,
    creator: string,
    image?: string,
    members: [string],
    moderators?: [string],
    created_at?: Date,
    updated_at?: Date
}

export type GroupModel = Model<Group>