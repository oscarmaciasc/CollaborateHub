import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { 
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middlewares/error.handler'
import { config } from './config/config'
import routerApi from './routes'
import passport from 'passport'
import './utils/auth'

const { port, mongoUri, env } = config

const app = express()
app.use(cors())
app.use(express.json())

const connectDB = () => {
  mongoose.connect(mongoUri)
}

app.use(passport.initialize())
routerApi(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)