const Library = {
    addBookToLibrary: function (title, ISBN, author, genre) {
        const book = new Book(title, ISBN, author, genre);
        this[book.title] = book;
    }
}

function Book(title, ISBN, author, genre) {
    this.title = title;
    this.ISBN = ISBN;
    this.author = author;
    this.genre = genre;
    this.checkoutOut = false;
    this.dueDate = "";
}

Library.addBookToLibrary("Where the Red Fern Grows", 1482928934987234, "Wilson Rawls", "Children's Literature");
Library.addBookToLibrary("Tom Sawyer", 2349834982743, "Mark Twain", "Children's Literature");
Library.addBookToLibrary("The Lord of the Rings: The Fellowship of the Ring", 234523452345, "J.R.R. Tolkien", "Children's Literature");
Library.addBookToLibrary("1984", 23498572345, "George Orwell", "Utopian and Dystopian Fiction");
Library.addBookToLibrary("Everyone Poops", 239548723059827345, "Taro Gomi", "Children's non-fiction literature");
Library.addBookToLibrary("Sabriel", 2937485623758, "Garth Nix", "Fantasy Fiction");
Library.addBookToLibrary("Fahrenheit 451", 29573857402759, "Ray Bradbury", "Utopian and Dystopian Fiction");
Library.addBookToLibrary("The Depressing Life Story of Jordan Williams", 35453545354, "Jordan Williams", "Biography");
Library.addBookToLibrary("The life story of Jennifer Lawson", 222434243424, "Jennifer Lawson", "Biography");
Library.addBookToLibrary("The Life of Phil", 5558395748, "Philip Patton", "Biography");
Library.addBookToLibrary("William the Conqueror: 2018", 88895673958, "William Kimball", "Biography");


console.log(Library);
console.log(Library["Tom Sawyer"].ISBN)


