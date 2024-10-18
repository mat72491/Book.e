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

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
