const Library = {}

function Book(title, ISBN, author, genre) {
    this.title = title;
    this.ISBN = ISBN;
    this.author = author;
    this.genre = genre;
    this.checkoutOut = false;
    this.dueDate = "";
}



const whereTheRedFernGrows = new Book("Where the Red Fern Grows", 148392234234, "Wilson Rawls", "Children's Literature");
const tomSawyer = new Book("Tom Sawyer", 2349834982743, "Mark Twain", "Children's Literature");

console.log(whereTheRedFernGrows)


function addBookToLibrary (book) {
    Library[book.title] = book;
}

addBookToLibrary(whereTheRedFernGrows);
addBookToLibrary(tomSawyer);

console.log(Library);
console.log(Library["Tom Sawyer"].ISBN)

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
