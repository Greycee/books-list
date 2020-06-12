const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  publisher: {
    type: String,
    trim: true,
    required: true,
  },
  subject: {
    type: String,
    trim: true,
    required: true,
  },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
