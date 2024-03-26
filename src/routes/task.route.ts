import express from 'express'
import passport from 'passport'
import { Task } from '../types/task.type'
import TaskService from '../services/task.service'
import { JwtRequestType } from '../types/user.type'
import { ObjectId } from 'mongoose'

const router = express.Router()
const service = new TaskService()

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req: JwtRequestType, res) => {
        const {
            user: { sub }
        } = req
        const task: Task = req.body
        const newTask = await service.create(task)
        res.status(201).json({ task: newTask })
    }
)

router.get('/', async (req, res, next) => {
    try {
        const { id } = req.query
        const task = await service.findById(id as string)
        res.status(200).json({ task })
    } catch (error) {
        next(error)
    }
})

export default router