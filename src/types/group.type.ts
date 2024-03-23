import type {Model, ObjectId} from 'mongoose'

export type Group = {
    id?: ObjectId,
    name: String,
    description: String,
    creator_id: ObjectId,
    members?: [ObjectId],
    moderators?: [ObjectId],
    created_at?: Date,
    updated_at?: Date
}

export type GroupModel = Model<Group>