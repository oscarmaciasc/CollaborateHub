import type { Model } from 'mongoose'
import { Request } from 'express'
import { ObjectId } from 'mongoose'

export type User = {
  id?: string
  username: string
  email: string
  password: string
  phoneNumber: string
  profile: {
    firstName: string
    lastName: string
    avatar?: string
    bio?: string
  }
  created_at?: Date
  updated_at?: Date
}

export type UserRequestType = Request & {
  user: User
}

export type JwtRequestType = Request & {
  user: {
    sub: ObjectId
  }
}

export type UserModel = Model<User>
