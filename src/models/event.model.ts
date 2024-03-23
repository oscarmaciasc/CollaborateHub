import {Schema, model, Types} from 'mongoose'
import {Event, EventModel} from '../types/event.type'

const Events = new Schema<Event, EventModel>({
    group_id: {
        type: Types.ObjectId,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    date: {
        type: Date,
        required: true,
        index: true
    },
    organizer_id: {
        type: Types.ObjectId,
        required: true,
        index: true
    },
    attendees: [{
        type: Types.ObjectId,
        ref: 'User',
        index: true
    }],
    created_at: {
        type: Date,
        default: Date.now,
        index: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

export default model('Event', Events)