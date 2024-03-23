import express from 'express'
import mongoose, { type ConnectOptions } from 'mongoose'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'

const MONGO_URI = 'mongodb://localhost:27017/collaboratehub'

const app = express()
const port = 3011

const connectDB = () => {
  mongoose.connect(MONGO_URI)
}

app.use(express.json())
app.use(logErrors)
app.use(errorHandler)
app.use(boomErrorHandler)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})
