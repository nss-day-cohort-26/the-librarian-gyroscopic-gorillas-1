const Librarian = {
    registerACustomer: function(customer) {
        let randNum = Math.floor(100000000 + Math.random() * 900000000);
        customer.libraryCardNum = randNum
    },
    checkoutABook: function (book, customer) {
        if (book.checkedOut) {
            alert("Denied")
        } else {
            book.checkedOut = true;
            let date = new Date();
            date.setDate(date.getDate() + 14);
            book.dueDate = date;
            customer.bookShelf = book
        }
    },
    checkABookIn: function (book) {
        if () {

        } else {

        }
    },
    bookSearch: function () {

    }
}

Librarian.checkoutABook("1984")