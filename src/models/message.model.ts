import {Schema, model, Types} from 'mongoose'
import {Message, MessageModel} from '../types/message.type'

const Messages = new Schema<Message, MessageModel>({
    group_id: {
        type: Types.ObjectId,
        required: true,
        index: true
    },
    sender_id: {
        type: Types.ObjectId,
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

export default model('Message', Messages)