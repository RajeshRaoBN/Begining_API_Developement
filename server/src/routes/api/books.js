// src/routes/api/books.js

const express = require('express')
const router = express.Router()

// Load Book model

const Book = require('../../models/Book')

// @route GET api/books/test
// @description tests books route
//access Public
router.get('/test', (req, res) => res.send('Book route testing'))

// @route GET api/books
// @description Get all books
//access Public
router.get('/', (req, res) => {
    Book.find().then(books => res.json(books))
    .catch(err => res.status(404).json({ nobookscound: 'No Books found'}))
})

// @route GET api/books/:id
// @description Get single book by id
//access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookscound: 'No Books found'}))
})

// @route POST api/books
// @description add/save book
//access Public
router.post('/', (req, res) => {
    Book.create(req.body).then(book => res.json({ msg: 'Book added Successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this book'}))
})

// @route PUT api/books/:id
// @description Update book
//access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body).then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err => res.status(404).json({ error: 'Unable the update the database'}))
})

// @route DELETE api/books/:id
// @description Delete book by id
//access Public
router.delete('/:id', (req, res) => {
    Book.findBookByIdAndRemove(req.params.id, req.body).then(book => res.json({ msg: 'Book entry delete successfully'}))
    .catch(err => res.status(404).json({ error: 'No Such Books found'}))
})

module.exports = router