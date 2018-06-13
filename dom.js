let article = document.querySelector("#library")
let fragment = document.createDocumentFragment()

let bookGenre = document.createElement("input")
bookGenre.setAttribute("type", "text")
bookGenre.setAttribute("name", "Book Genre")
fragment.appendChild(bookGenre)

let inputButton = document.createElement('input')
inputButton.textContent = "Search Books"
inputButton.setAttribute("value", "submit")
inputButton.setAttribute("type", "submit")
fragment.appendChild(inputButton)

const createEl = (content) => {
    let div = document.createElement('div')
    div.textContent(content)
    fragment.appendChild(div)
}

inputButton.addEventListener("cilck", function() {
    let array = Librarian.bookSearch()
    createEl(array)
})

article.appendChild(fragment)

