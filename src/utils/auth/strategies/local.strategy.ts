import {Strategy} from 'passport-local'
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'

const options = {userNameField: 'username', passwordField: 'password'}

const LocalStrategy = new Strategy(options, async (username, password, next) => {
    try{
        // const user = await service.findByUsername(username)
        // validar contrasenia
    } catch(error) {
        next(error, false)
    }
}) 