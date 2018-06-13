// // Define the database as an object
// const libraryDatabase = {};
// // Define the arrays (a.k.a. tables) in the database to store each type of items
// libraryDatabase.customer = [];
// libraryDatabase.books = [];

const customer = {
    
    addCustomer: function (firstName, lastName, address, favGenre) {
        const customer = new Customer(firstName, lastName, address, favGenre);
        libraryDatabase.customers[customer.lastName + ", " + customer.firstName] = customer;
    }

}

function Customer(firstName, lastName, address, favGenre) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.bookshelf = {};
    this.address = address;
    this.libraryCardNum = 0;
    this.favGenre = favGenre;
    this.checkoutBook = checkoutBookFunction("1984");
    this.returnBook = () => {};
   
}

customer.addCustomer("Jim", "Halpert", "Scranton, PA", "NASCAR Sports Comics");
customer.addCustomer("Jordan", "Williams", "Under a bridge", "Gothic fiction");
customer.addCustomer("Jennifer", "Lawson", "NCC-1701 Enterprise-D, with Data", "Dystopian Fiction");
customer.addCustomer("Phillip", "Patton", "On the Battleground", "Military Autobiographies, specifically General Patton");
customer.addCustomer("William", "Kimball", "Texas", "Sci-fi");

saveDatabase(libraryDatabase, "library")



// const customer = {
//     firstName: "",
//     lastName: "",
//     bookshelf: {},
//     address: "",
//     libraryCardNum: 0,
//     favGenre: "",
//     checkoutBook: () => {},
//     returnBook: () => {},
// }

// const mkCustomer = (first, lastName, address, favGenre ) => {
//     let name = Object.create(customer);
//     name.firstName = first;
//     name.lastName = lastName;
//     name.address = address;
//     name.favGenre = favGenre;
//     return name
// }

// let Jim = mkCustomer("Jim", "Halpert", "Scranton, PA", "NASCAR Sports Comics");
// let Jordan = mkCustomer("Jordan", "Williams", "Under a bridge", "Gothic fiction");
// let Jenn = mkCustomer("Jennifer", "Lawson", "NCC-1701 Enterprise-D, with Data", "Dystopian Fiction");
// let Phillip = mkCustomer("Phillip", "Patton", "On the Battleground", "Military Autobiographies, specifically General Patton");
// let william = mkCustomer("William", "Kimball", "Texas", "Sci-fi")
// libraryDatabase.customer.push(Jim, Jordan, Jenn, Phillip)


