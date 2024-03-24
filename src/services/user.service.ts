import Users from '../models/user.model'
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'

class UserService {
  async create(user: User) {
    const newUser = await Users.create(user).catch((error) => {
      console.log('Could not save user', error)
    })

    return newUser
  }

  async findAll() {
    const users = await Users.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!users) {
      throw boom.notFound('There are not movies')
    }

    return users
  }

  async findById(id: string) {
    const user = await Users.findById({ id }).catch((error) => {
        console.log('Could not retrieve user info', error)
    })

    if(!user) {
      throw boom.notFound('User not found')
    }

    return user
  }

  async findByUsername(username: string) {
    const user = await Users.findOne({ username }).catch((error) => {
      console.log('Could not retrieve user info', error)
    })

    if (!user) {
      throw boom.notFound('User not found')
    }

    return user
  }

  async findByEmail(email: string) {
    const user = await Users.findOne({ email }).catch((error) => {
      console.log('Could not retreive user info', error)
    })

    if (!user) {
      throw boom.notFound('User not found')
    }

    return user
  }
}

export default UserService
