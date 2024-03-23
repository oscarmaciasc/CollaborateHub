import type {Model} from 'mongoose'

export type Message = {
    id?: string,
    group_id: string, // Reference to the group associated with the message 
    sender_id: string, // Reference to the user sending the message
    content: string,
    timestamp: Date
}

export type MessageModel = Model<Message>