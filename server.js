const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bookController = require('./controllers/bookController')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/books', bookController.getAllBooks)
app.get('/authors', bookController.getAllAuthors)
app.get('/publishers', bookController.getAllPublishers)

app.get('/books/:id', bookController.getBookById)
app.get('/books/genre/:genre', bookController.getBookByGenre)
app.get('/books/classics/:classics', bookController.getClassics)
app.get('/books?classics=true', bookController.getClassics)

app.post("/books", bookController.createBook)
app.post("/publishers", bookController.createPublisher)
app.post("/authors", bookController.createAuthor)

app.put("/authors/:id", bookController.updateAuthor)
app.put("/books/:id", bookController.updateBook)
app.put("/publishers/:id", bookController.updatePublisher)

app.delete("/authors/:id", bookController.deleteAuthor)
app.delete("/books/:id", bookController.deleteBook)
app.delete("/publishers/:id", bookController.deletePublisher)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
