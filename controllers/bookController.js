
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
const getBookById = async (req, res) => {
    try{
        const { id } = req.params
        const book = await Book.findById(id)
        if (book) {
            return res.json(book)
        }
     return res.status(404).send(`that book with ID not found`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getBookByAuthorId = async (req, res) => {
    try{
        const books = await Book.findbyId(req.params.id).populate('author', 'name')
            return res.json(books)
        } catch (e) {
            return res.status(500).send(e.message)
    }
    }

const getBookByGenre = async (req,res) => {
    try{
        const { genre } = req.params
        const book = await Book.find({ "genre": genre })
        if (book){
            return res.json(book)
        }return res.status(404).send(`that book genere is not found`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getClassics = async (req, res) => {
    const {classics} = req.query
        try{
        const filter = classics === true ? { is_classic: true} : {is_classic: false}
        const books = await Book.find(filter)
        res.json(books)
    }catch(e) {
      return res.status(500).send(e.message)
} 
}

const createBook = async (req, res) => {
    try {
        const book = await new Book(req.body)
        await book.save()
        return res.status(201),json({ book })
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

const createAuthor = async (req, res) => {
    try {
        const author = await new Author(req.body)
        await author.save()
        return res.status(201),json({ author })
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

const createPublisher = async (req, res) => {
    try {
        const publisher = await new Publisher(req.body)
        await publisher.save()
        return res.status(201),json({ publisher })
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

const updatePublisher = async (req, res) => {
    try {
        let { id } = req.params
        let publisher = await Publisher.findByIdAndUpdate(id, req.body, { new: true})
        if (publisher) {
            return res.status(200).json(publisher)
        }
    throw new Error("publisher not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateAuthor = async (req, res) => {
    try {
        let { id } = req.params
        let author = await Author.findByIdAndUpdate(id, req.body, { new: true})
        if (author) {
            return res.status(200).json(author)
        }
    throw new Error("author not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const updateBook = async (req, res) => {
    try {
        let { id } = req.params
        let book = await Book.findByIdAndUpdate(id, req.body, { new: true})
        if (book) {
            return res.status(200).json(book)
        }
    throw new Error("book not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const deleteAuthor = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Author.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Author deleted");
      }
      throw new Error("Author not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

  const deleteBook = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Book.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Book deleted");
      }
      throw new Error("Book not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

  const deletePublisher = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Publisher.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).send("Publisher deleted");
      }
      throw new Error("Publisher not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  };

module.exports = {
    getAllBooks,
    getAllAuthors,
    getAllPublishers,
    getBookById,
    getBookByAuthorId,
    getBookByGenre,
    getClassics,
    createBook,
    createAuthor,
    createPublisher,
    updatePublisher,
    updateAuthor,
    updateBook,
    deleteAuthor,
    deleteBook,
    deletePublisher

}