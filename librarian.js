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

    checkABookIn: function (book) {
        let date = new Date();
        date.setDate()
        if (book.dueDate < date) {
            alert("You owe $5");
            book.dueDate = 0;
        } else {
            book.dueDate = 0;
        }
    },

    bookSearch: function () {

    }
}

Librarian.checkoutABook(libraryDatabase.books["1984"])


