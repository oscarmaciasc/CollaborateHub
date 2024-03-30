import { ObjectId } from 'mongoose'
import Users from '../models/user.model'
import { User, UserModel } from '../types/user.type'
import boom from '@hapi/boom'
import bcrypt from 'bcrypt'

class UserService {
  async create(user: User) {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const newUser = await Users.create({
        username: user.username,
        email: user.email,
        password: hashedPassword,
        phoneNumber: user.phoneNumber,
        receiveEmails: user.receiveEmails,
        profile: {
          firstName: user.profile.firstName,
          lastName: user.profile.lastName
        }
    }).catch((error) => {
      console.log('Could not save user', error)
    })

    if(!newUser) {
        throw boom.badRequest('Could not create user')
    }
    return newUser
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

    //   async findAll() {
    //     const users = await Users.find().catch((error) => {
    //       console.log('Error while connecting to the DB', error)
    //     })
    
    //     if (!users) {
    //       throw boom.notFound('There are not movies')
    //     }
    
    //     return users
    //   }
    
      async findById(id: ObjectId) {
        const user = await Users.findById(id).catch((error) => {
            console.log('Could not retrieve user info', error)
        })
    
        if(!user) {
          throw boom.notFound('User not found')
        }
    
        return user
      }
    
    //   async findByUsername(username: string) {
    //     const user = await Users.findOne({ username }).catch((error) => {
    //       console.log('Could not retrieve user info', error)
    //     })
    
    //     if (!user) {
    //       throw boom.notFound('User not found')
    //     }
    
    //     return user
    //   }
}

export default UserService
