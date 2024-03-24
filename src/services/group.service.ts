import Groups from '../models/group.model'
import { Group } from '../types/group.type'
import boom from '@hapi/boom'

class GroupService {
    async create(group: Group) {
        const newGroup = await Groups.create({
            ...group
        }).catch((error) => {
            console.log('Could not save group', error)
        })

        if(!newGroup) {
            throw boom.badRequest('Could not create group')
        }

        return newGroup
    } 

    async findByName(name: string) {
        const group = await Groups.findOne({ name }).catch((error) => {
            console.log('Could not retreive group info', error)
        })

        if(!group) {
            throw boom.notFound('Group not found')
        }

        return group
    }
}

export default GroupService