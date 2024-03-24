import express from "express";
import { User } from "../types/user.type";
import UserService from '../services/user.service'
import boom from '@hapi/boom'

const router = express.Router()
const service = new UserService()

// User Create at Database
router.post('/', async (req, res, next) => {
    try {
        //TODO: Validate user data coming from the request
        const user: User = req.body
        const newUser = await service.create(user)
        res.status(201).json({user: newUser})
    } catch(error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
  try {
      const users = await service.findAll()
      res.status(200).json(users)
  } catch (error) {
      next(error)
  }
})

// router.get('/:username', async (req, res, next) => {
//     try {
//       const { username } = req.query
//       const user = await service.findByUsername(username as string)
//       console.log({ user })
  
//       res.status(200).json({ user })
//     } catch (error) {
//       next(error)
//     }
//   })

export default router