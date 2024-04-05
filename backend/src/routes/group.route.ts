import express from 'express'
import passport from 'passport'
import { Group } from '../types/group.type'
import GroupService from '../services/group.service'
import {JwtRequestType} from '../types/user.type'

const router = express.Router()
const service = new GroupService()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: JwtRequestType, res) => {
    const {
      user: { sub }
    } = req
    const group: Group = req.body

    const newGroup = await service.create(group, sub)
    res.status(201).json({ group: newGroup })
  }
)

router.get('/', async (req, res, next) => {
  try {
    const { name } = req.query
    const group = await service.findByName(name as string)

    res.status(200).json({ group })
  } catch (error) {
    next(error)
  }
})

router.get('/findByGroupId/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const group = await service.findById(id as string)

    res.status(200).json({ group })
  } catch (error) {
    next(error)
  }
})

router.get('/findByMember/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    const groups = await service.findByMember(userId as string)
    res.status(200).json({ groups })
  } catch (error) {
    next(error)
  }
})

export default router