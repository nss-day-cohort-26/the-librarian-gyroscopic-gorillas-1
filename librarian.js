const Librarian = {
    registerACustomer: function() {

    },
    checkoutABook: function (book) {
        if (book.checkedOut) {
            alert("Denied")
        } else {
            book.checkedOut = true;
            let date = new Date();
            date.setDate(date.getDate() + 14);
            book.dueDate = date;
            console.log(date)
            book.book
        }
    },
    checkABookIn: function (book) {
        // if () {

        // } else {

        // }
    },
    bookSearch: function () {

    }
}

Librarian.checkoutABook("1984")