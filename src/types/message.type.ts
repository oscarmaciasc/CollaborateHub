import type {Model, ObjectId} from 'mongoose'

export type Message = {
    id?: ObjectId,
    group_id: ObjectId, // Reference to the group associated with the message 
    sender_id: ObjectId, // Reference to the user sending the message
    content: String,
    timestamp: Date
}

export type MessageModel = Model<Message>