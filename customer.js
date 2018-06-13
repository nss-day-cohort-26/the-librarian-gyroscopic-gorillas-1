const customer = {
    firstName: "",
    lastName: "",
    bookshelf: {},
    address: "",
    libraryCardNum: 0,
    favGenre: "",
    checkoutBook: () => {},
    returnBook: () => {},
}

const mkCustomer = (first, lastName, address, favGenre ) => {
    let name = Object.create(customer);
    name.firstName = first;
    name.lastName = lastName;
    return name
}

let Jim = mkCustomer("JIm", "Halpert")
console.log(Jim.firstName);
console.log(Jim)

// let jim = Object.create(customer)
// jim.firstName = "jim"
// console.log(jim.firstName)