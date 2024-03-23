import {Schema, model, Types} from 'mongoose'
import {Message, MessageModel} from '../types/message.type'

export const MESSAGE_REFERENCE = 'Message'

const Messages = new Schema<Message, MessageModel>({
    group_id: {
        type: String,
        required: true,
        index: true
    },
    sender_id: {
        type: String,
        required: true,
        index: true
    },
    content: {
        required: true,
        trim: true
    },
    timestamp: {
        required: true,
        index: true
    }
})

export default model(MESSAGE_REFERENCE, Messages)