import express from 'express'
import mongoose, { type ConnectOptions } from 'mongoose'

const MONGO_URI = 'mongodb://mongo:27017/collaboratehub'

const app = express()
const port = 3011

const connectDB = () => {
    mongoose.connect(MONGO_URI)
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})
