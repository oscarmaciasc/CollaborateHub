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

      // Set the token as an HTTP-only cookie
      res.cookie('token', token, {
        maxAge: expiresIn,
        httpOnly: true, // Set as HTTP-only
        secure: false, // Send cookie only over HTTPS if your app is HTTPS
        sameSite: 'lax', // Set appropriate SameSite policy
        path: '/'
      })

      res.status(200).json({ user: dbUser.toClient(), token })
      console.log('token duration: ' + expiresIn)
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/auto-login',
  passport.authenticate('jwt', { session: false }),
  async (req: RequestType & User, res, next) => {
    try {
      const { user } = req
      const dbUser = await service.findByEmail(user.email)
      if (dbUser) {
        // If user is found, send user details and token (if needed)
        const payload = { sub: dbUser.id }
        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' }) // Optionally, issue a new token
        res.cookie('token', token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true
        }) // Store token in a cookie with 1 day expiration
        res.status(200).json({ user: dbUser.toClient(), token })
      } else {
        // If user is not found, send an error response
        res.status(404).json({ message: 'User not found' })
      }
    } catch (error) {
      // If an error occurs, send an error response
      console.error('Auto login error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
)

export default router
