const mongoose = require('mongoose')
const authorSchema = require('./author')
const publisherSchema = require('./publisher')
const bookSchema = require('./book')

const Publisher = mongoose.model('Publisher', publisherSchema)
const Author = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)

module.exports = {
    Publisher,
    Author,
    Book
}