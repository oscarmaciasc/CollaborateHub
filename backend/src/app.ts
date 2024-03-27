import express from 'express'
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
import cookieParser from 'cookie-parser'
import cors from 'cors'

const { port, mongoUri, env } = config

const app = express()
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
)
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