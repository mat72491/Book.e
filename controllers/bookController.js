
const { Book, Author, Publisher } = require('../models');


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find()
        res.json(authors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find()
        res.json(publishers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getAllBooks,
    getAllAuthors,
    getAllPublishers
}