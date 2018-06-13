const Librarian = {
    registerACustomer: function(customer) {
        let randNum = Math.floor(100000000 + Math.random() * 900000000);
        customer.libraryCardNum = randNum
    },

    checkoutABook: function (book) {
        if (book.checkedOut) {
            alert("Denied")
        } else {
            let date = new Date();
            date.setDate(date.getDate() + 14);
            book.dueDate = date;

        }
    },

    checkABookIn: function (book, customer) {
        let date = new Date();
        console.log(date)
        if (book.dueDate > date) {
            alert("You owe $5");
            book.dueDate = 0;
            libraryDatabase.customers[customer].bookshelf[book.title] -= libraryDatabase.books[book]
        } else {
            book.dueDate = 0;
            libraryDatabase.customers[customer].bookshelf[book.title] -= libraryDatabase.books[book]
        }
    },

    bookSearch: function (genre) {
        let allTheBooks = []
        for (let title in libraryDatabase.books) {
            let book = libraryDatabase.books[title]
            if (book.genre === genre) {
                console.log(book)
                allTheBooks.push(book)
            } 
        }
        if (allTheBooks.length === 0) {
            allTheBooks.push("No such genre")
        }
        return allTheBooks
    }
}

Librarian.checkoutABook(libraryDatabase.books["1984"])
console.log(libraryDatabase.books["1984"])
Librarian.checkABookIn(libraryDatabase.books["Where the Red Fern Grows"])
console.log(libraryDatabase.books["Where the Red Fern Grows"])

let test = Librarian.bookSearch("Children's Literature")
console.log(test)
test = Librarian.bookSearch("Action")

console.log(test)
console.log(libraryDatabase.books["1984"].genre)
