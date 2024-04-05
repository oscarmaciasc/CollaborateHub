import express from 'express'
import type { Request } from 'express'
import type { User } from '../types/user.type'
import passport from 'passport'
import UserService from '../services/user.service'
import jwt from 'jsonwebtoken'
import { config } from '../config/config'

const router = express.Router()
const service = new UserService()

type RequestType = Request & {
  user: User
}

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req: RequestType & User, res, next) => {
    try {
      const { user } = req
      const rememberMe = req.body.rememberMe

      const payload = { sub: user.id }

      // Set expiration time based on "rememberMe" option
      const expiresIn = rememberMe
        ? 7 * 24 * 60 * 60 * 1000
        : 24 * 60 * 60 * 1000 // 7 days or 1 day in milliseconds

      const dbUser = await service.findByEmail(user.email)
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn })

      console.log("token: " + token)

      // Set the token as an HTTP-only cookie
      res.cookie('token', token, {
        maxAge: expiresIn,
        httpOnly: false, // Set as HTTP-only
        secure: false, // Send cookie only over HTTPS if your app is HTTPS
        sameSite: 'lax', // Set appropriate SameSite policy
        path: '/login'
      })

      res.status(200).json({ user: dbUser.toClient(), token })
    } catch (error) {
      next(error)
    }
  }
)

// this path will be used to check if the cookie is valid to auto login inside the application;

router.get('/auto-login', (req, res, next) => {
    try {
      const cookie = req.headers.authorization

      if(!cookie||cookie === null) {
        return res.sendStatus(401)
      }

      return res.sendStatus(200)
       
    } catch (error) {
      next(error)
    }
})

router.get('/logout', (req, res, next) => {
  try {
    res.clearCookie('token')
    return res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

export default router
