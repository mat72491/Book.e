const db = require('../db')
const { Author } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const authors = [
    { name: "Alexandra Bracken",
        country: "United States"
    },
    { name: "Chuck Hogan",
        country: "United States" 
    },
    { name: "Guillermo del Toro",
        country: "United States"
    },
    { name: "Tom Perotta",
        country: "United States"
    },
    { name: "John Knowles",
        country: "United States"
    },
    { name: "James Baldwin",
        country: "United States"
    },
    { name: "John Steinbeck",
        country: "United States"
    },
    { name: "William S. Burroughs",
        country: "United States"
    },
    { name: "Fyodor Dostoyevsky",
        country: "Russia"
    },
    { name: "Sophocles",
        country: "Greece"
    },
    { name: "Homer",
        country: "Greece"
    },
    { name: "Jaroslav Hasek",
        country: "Czechia"
    },
    { name: "J.K. Rowling",
        country: "United Kingdom"
    },
    { name: "Elena Ferrante",
        country: "Italy"
    },
    { name: "Adam Silvera",
        country: "United States"
    },
    { name: "Paulo Coelho",
        country: "Brazil"
    },
    { name: "Olivie Blake",
        country: "United States"
    },
    { name: "F. Scott Fitzgerald",
        country: "United States"
    },
    { name: "Carson McCullers",
        country: "United States"
    },
    { name: "Sigmund Freud",
        country: "Austria"
    },
    {
        name: "Renee Descartes",
         country: "France"
    },
    {
        name: "Theodore Dreiser",
         country: "United States"
    },
    {
        name: "Soren Kierkegaard",
         country: "Denmark"
    },
    {
        name: "Aristotle",
         country: "Greece"
    },
    {
        name: "Janet Malcolm",
         country: "United States"
    },
    {
        name: "Mark Twain",
         country: "United States"
    },
    {
        name: "William Shakespeare",
         country: "United Kingdom"
    },
    {
        name: "Robert Louis Stevenson",
         country: "United Kingdom"
    },
    {
        name: "Oscar Wilde",
         country: "United Kingdom"
    },
    {
        name: "Charles Dickens",
         country: "United Kingdom"
    },
    {
        name: "William Finnegan",
         country: "United States"
    },
    {
        name: "Ann Patchett",
         country: "United States"
    },
    {
        name: "Hermann Hesse",
         country: "Germany"
    },
    {
        name: "Richard Matheson",
         country: "United States"
    },
    {
        name: "Edith Wharton",
         country: "United States"
    },
    {
        name: "Michael Herr",
         country: "United States"
    },
    {
        name: "Alex Kotlowitz",
         country: "United States"
    },
    {
        name: "Emma Larkin",
         country: "United States"
    },
    {
        name: "Chang-Rae Lee",
         country: "United States"
    },
    {
        name: "Ann Petry",
         country: "United States"
    },
    {
        name: "Anne Fadiman",
         country: "United States"
    },
    {
        name: "Meg Jay, PhD",
         country: "United States"
    },
    {
        name: "Multiple Authors",
         country: "United States"
    },
    {
        name: "Ty Tashiro, PhD",
         country: "United States"
    },
    {
        name: "Dr. David Perlmutter",
         country: "United States"
    },
    {
        name: "Satchin Panda, PhD",
         country: "United States"
    },
    {
        name: "Jenny Odell",
         country: "United States"
    },
    {
        name: "David Brooks",
         country: "United States"
    },
  ]
  await Author.insertMany(authors)
  console.log("Created some authors!")
  
}


const run = async () => {
    await main()
    db.close()
}

run()