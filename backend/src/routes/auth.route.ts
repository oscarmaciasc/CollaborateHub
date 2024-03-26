import express from 'express'
import type { Request } from 'express';
import type { User } from '../types/user.type';
import passport from 'passport'
import UserService from '../services/user.service';
import jwt from 'jsonwebtoken'
import {config} from '../config/config'

const router = express.Router()
const service = new UserService()

type RequestType = Request & {
    user: User
}

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    async (req: RequestType & User, res, next) => {
        try{
            const {user} = req 
            //sub is the id of the subscribed user
            const payload = { sub: user.id }
            const dbUser = await service.findByEmail(user.email)
            const token = jwt.sign(payload, config.jwtSecret)
            res.status(200).json({ user: dbUser.toClient(), token })
        } catch(error) {
            next(error)
        }
})

export default router