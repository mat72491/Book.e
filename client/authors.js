const authorsList = document.querySelector(".authors-list")

//help from Jeremy. thanks!//

async function createAuthors(authors) {
    let response = await axios.get('http://localhost:3001/authors')
    authors = response.data
    console.log(authors)
    authors.forEach(author => {
        console.log(author)
        
        let li = authorsList.appendChild(document.createElement('li'))
        li.classList.add('author-container')
        
        let name = li.appendChild(document.createElement("li"))
        name.classList.add("author")
        name.innerText = author.name

        let country = li.appendChild(document.createElement("li"))
        country.classList.add("country")
        country.innerText = author.country

    })  
}
 createAuthors()

// have authors pulled => authors.forEach(author => {

