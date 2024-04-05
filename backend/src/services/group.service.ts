import Groups from '../models/group.model'
import { Group } from '../types/group.type'
import boom from '@hapi/boom'
import { UserProfile } from '../types/user.type'
import Users from '../models/user.model'
import { ObjectId } from 'mongoose'

class GroupService {
  async create(group: Group, userId: ObjectId) {

    const newGroup = await Groups.create({
      ...group,
      creator: userId,
      user: userId,
      members: [userId],
      image: group.image
    }).catch((error) => {
      console.log('Could not save group', error)
    })

    const existingGroup = await this.findById((newGroup as any)._id)
    return existingGroup.populate([{ path: 'creator', strictPopulate: false }])
  }

  async findById(id: string) {
    const group = await Groups.findById(id).catch((error) => {
      console.log('id: ' + id)
      console.log('Error while connecting to the DB', error)
    })

    if (!group) {
      throw boom.notFound('Group not found')
    }

    return group
  }

  async findByName(name: string) {
    const group = await Groups.findOne({ name }).catch((error) => {
      console.log('Could not retreive group info', error)
    })

    if (!group) {
      throw boom.notFound('Group not found')
    }

    return group
  }

  async findByMember(userId: string) {
    const groups = await Groups.find({ members: userId }).catch((error) => {
      console.log('Could not retreive group info', error)
    })

    if (!groups) {
      throw boom.notFound('Groups not found')
    }

    console.log('groups: ' + groups)
    return groups
  }
}

export default GroupService
