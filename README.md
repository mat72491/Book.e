Book.e (pronounced Bookie) is the user-generated Netflix of books!

Ever go to the library, only to find that the book you want to read is out of stock? Or have you ever balked at the price of a new book, or taken the risk of buying a pre-owned book online at a discount?

Have no fear, Book.e is here!  Book.e is a user-generated book database that allows users to rent and trade books with one another!  Users can upload their book collections into the Book.e database.  In return, they will have access to other people's book collections, the ability to request books, and the opportunity to fulfill other users' book requests.  

MVP
Book.e will run on mongoDB, express, and Javascript.  AAU, you can 
view books that are available on the site, with the author information, a brief description, and the condition.

The four related data entities will be Publisher, Author, Genre, and Book.

const publishers = [
    {
        name: "string"
        address: "string"
    }
]

const authors = [
    {
        name: "string"
        country: "string"
    }
]

const genres = [
    {
        name: (string)
    }
]

const books = [{
    title: "string"
    author: objectID
    ISBN: number
    genre: objectID
    publication_year: number
    publisher: objectID
    description: "string"
    image: "string"
}]


Stretch Goals
AAU, you can leave comments and reviews of the books you've read.
Carousel styling on the landing page.
Individual user accounts.
Stock counter.
Add, delete, and update book information on the front end.  Additionally, you can view all books uploaded to the database and fill out a request form to check out a book.

Icebox
Direct messaging between users.
Book club scheduling and video conferencing.









