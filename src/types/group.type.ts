import type {Model} from 'mongoose'

export type Group = {
    id?: string,
    name: string,
    description: string,
    creator_id: string,
    members?: [string],
    moderators?: [string],
    created_at?: Date,
    updated_at?: Date
}

export type GroupModel = Model<Group>