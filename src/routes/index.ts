import express from 'express'
import UserRouter from './user.route'
import GroupRouter from './group.route'
import AuthRouter from './auth.route'
import TaskRouter from './task.route'

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/users', UserRouter)
    router.use('/groups', GroupRouter)
    router.use('/tasks', TaskRouter)
    router.use('/auth', AuthRouter)
}

export default routerApi