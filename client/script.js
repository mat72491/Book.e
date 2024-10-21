const booksSection = document.querySelector(".book-container")
const titleSection = document.querySelector(".title-container")
const authorSection = document.querySelector(".author-container")
const genreSection = document.querySelector(".genre-container")
const descriptionSection = document.querySelector(".description-container")
let condition = document.querySelector(".quality-container")



let books = []
const getAllBooks = async () => {
    let response = await axios.get('http://localhost:3001/books')
    books = response.data
    console.log(books)

    if (books.length > 0) {
        displayEnlargedBook(books[0])
    }
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
        authorSection.innerHTML = ''
        genreSection.innerHTML = ''
        descriptionSection.innerHTML = ''
        condition.innerHTML = ''
        

        let titleElement = document.createElement("h1")
        titleElement.classList.add("bookTitle")
        titleElement.textContent = book.title
        titleSection.appendChild(titleElement)

        let authorElement = document.createElement("h2")
        authorElement.classList.add("author")
        authorElement.textContent = book.author.name
        authorSection.appendChild(authorElement)
    
        let genreElement = document.createElement("h3")
        genreElement.classList.add("genre")
        genreElement.textContent = book.genre
        genreSection.appendChild(genreElement)

        let descriptionElement = document.createElement("h4")
        descriptionElement.classList.add("description")
        descriptionElement.textContent = book.description
        descriptionSection.appendChild(descriptionElement)

        let conditionElement = document.createElement("h5")
        conditionElement.classList.add("condition")
        conditionElement.textContent = `Condition: ${book.condition}`
        condition.appendChild(conditionElement)
    }
// Carousel scroll functionality
let currentIndex = 0;
const bookHeight = 239
let totalBooks = books.length
    const upBtn = document.querySelector('.up-btn');
    const downBtn = document.querySelector('.down-btn');

    if (upBtn && downBtn) {
        upBtn.addEventListener('click', () => {
           currentIndex = (currentIndex <= 0) ? books.length : currentIndex - 3  
           console.log('up',currentIndex)
                booksSection.style.transform = `translateY(-${currentIndex * bookHeight}px)`

        });

        downBtn.addEventListener('click', () => {
            currentIndex = (currentIndex >= books.length ) ? 0 :currentIndex + 3
            console.log('down',currentIndex)
                booksSection.style.transform = `translateY(-${currentIndex * bookHeight}px)`
            }
        )}


    async function main(){
    await getAllBooks()
    createThumbnails(books)
}
main()







