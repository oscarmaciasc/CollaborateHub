import express from 'express'
import mongoose from 'mongoose'
import { 
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middlewares/error.handler'
import { config } from './config/config'

const { port, mongoUri, env } = config
console.log('URI: ' + mongoUri)
console.log('ENV: ' + env)

const app = express()
app.use(express.json())

const connectDB = () => {
  mongoose.connect(mongoUri)
}


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)