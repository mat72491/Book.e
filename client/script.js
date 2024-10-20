const booksSection = document.querySelector(".book-container")
const titleSection = document.querySelector(".title-container")
const authorSection = document.querySelector(".author-container")

let books = []
const getAllBooks = async () => {
    let response = await axios.get('http://localhost:3001/books')
    books = response.data
    console.log(books)
}

function createThumbnails(books) {
    books.forEach(book => {
        let div = booksSection.appendChild(document.createElement("div"))
        div.classList.add("bookContainer")
        
        let image = div.appendChild(document.createElement("img"))
        image.classList.add("bookCover")
        image.src = book.image

      div.addEventListener('click', () => {
        displayEnlargedBook(book);
    });

    })
}
    function displayEnlargedBook(book) {
        const enlargedImage = document.querySelector('.enlarged-book-image');
        enlargedImage.src = book.image;
        console.log(book)

        titleSection.innerHTML = ''

        let titleElement = document.createElement("h1")
        titleElement.classList.add("bookTitle")
        titleElement.textContent = book.title
        titleSection.appendChild(titleElement)

        let authorElement = document.createElement("h2")
        authorElement.classList.add("author")
        authorElement.textContent = book.author.name
        authorSection.appendChild(authorElement)
    }
    


    
    async function main(){
    await getAllBooks()
    createThumbnails(books)
}
main()







// const thumbnail = document.querySelector(".thumbnail")

// const thumbnails = async () => {
//     let response = await axios.get('http://localhost:3001/books')
//     books = response.data
//     console.log(books)
// }

// function createThumbnails(books) {
//     books.forEach(book => {
//         let div = booksSection.appendChild(document.createElement("div"))
//         div.classList.add("thumbnailContainer")
        
//         let image = div.appendChild(document.createElement("img"))
//         image.classList.add("thumbnail")
//         image.src = book.image
//     })
// }async function main(){
//     await createThumbnails()
//     createCards(books)
// }
// main()

