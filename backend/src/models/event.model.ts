import {Schema, model} from 'mongoose'
import {Event, EventModel} from '../types/event.type'
import { USER_REFERENCE } from './user.model'

export const EVENT_REFERENCE = 'Event'

const Events = new Schema<Event, EventModel>({
    group_id: {
        type: String,
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
        type: String,
        required: true,
        index: true
    },
    attendees: [{
        type: String,
        ref: USER_REFERENCE,
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

export default model(EVENT_REFERENCE, Events)