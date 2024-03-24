import express from 'express'
import { Group } from '../types/group.type'
import GroupService from '../services/group.service'

const router = express.Router()
const service = new GroupService()

router.post('/', async (req, res, next) => {
    try {
        const group: Group = req.body
        const newGroup = await service.create(group)
        res.status(201).json({ group: newGroup })
    } catch(error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try{
        const { name } = req.query
        const group = await service.findByName(name as string)
        console.log({ group })

        res.status(200).json({ group })
    } catch(error) {
        next(error)
    }
})

export default router