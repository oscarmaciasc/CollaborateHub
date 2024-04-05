import type { Model } from 'mongoose'
import { Request } from 'express'
import { ObjectId } from 'mongoose'

export type User = ToClientUser & {
  password: string
  receiveEmails: Boolean
  created_at?: Date
  updated_at?: Date
}


export type ToClientUser = {
  id?: string
  username: string
  email: string
  phoneNumber: string
  profile: UserProfile
}

export type UserProfile = {
  firstName: string
  lastName: string
  avatar: string
  bio: string
}

export type UserRequestType = Request & {
  user: User
}

export type JwtRequestType = Request & {
  user: {
    sub: ObjectId
  }
}
export type UserMethods = {
  toClient: () => ToClientUser
}

export type UserModel = Model<User, {}, UserMethods>
