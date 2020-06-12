const router = require('express').Router()
let Book = require('../models/book.model')

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
  const title = req.body.title
  const author = req.body.author
  const publisher = req.body.publisher
  const subject = req.body.subject

  const newBook = new Book({
    title,
    author,
    publisher,
    subject,
  })

  newBook
    .save()
    .then(() => res.json('Book added'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json('Book was sucessfully deleted from list.'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.title = req.body.title
      book.author = req.body.author
      book.publisher = req.body.publisher
      book.subject = req.body.subject

      book
        .save()
        .then(() => res.json('Book was sucessfully updated.'))
        .catch((err) => res.status(400).json(`Error: ${err}`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
