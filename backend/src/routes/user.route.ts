import express from "express";
import { User } from "../types/user.type";
import UserService from '../services/user.service'
import boom from '@hapi/boom'
import { ObjectId } from "mongoose";

const router = express.Router()
const service = new UserService()

// User Create at Database
router.post('/', async (req, res, next) => {
    try {
        //TODO: Validate user data coming from the request
        const user: User = req.body
        const newUser = await service.create(user)
        res.status(201).json({ user: newUser.toClient() })
    } catch(error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
      const { email } = req.query
      const user = await service.findByEmail(email as string)
  
      res.status(200).json({ user })
    } catch (error) {
      next(error)
    }
  })

  router.get('/findById/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findById(id as unknown as ObjectId);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
});

export default router