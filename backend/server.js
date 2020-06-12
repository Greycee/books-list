const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB connection estabilished sucessfully')
})

const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

app.listen(5000, () => {
  console.log('server is running on port 5000')
})
