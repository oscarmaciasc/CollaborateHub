import type {Model, ObjectId} from 'mongoose'

export type Event = {
    id?: ObjectId,
    group_id: ObjectId,
    title: String,
    description: String,
    location: String,
    date: Date,
    organizer_id: ObjectId,
    attendees?: [ObjectId],
    created_at?: Date,
    updated_at?: Date
}

export type EventModel = Model<Event>