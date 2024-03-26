import type {Model} from 'mongoose'

export type Event = {
    id?: string,
    group_id: string,
    title: string,
    description: string,
    location: string,
    date: Date,
    organizer_id: string,
    attendees?: [string],
    created_at?: Date,
    updated_at?: Date
}

export type EventModel = Model<Event>