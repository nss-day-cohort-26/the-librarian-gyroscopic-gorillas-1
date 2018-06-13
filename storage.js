// Define the database as an object
const libraryDatabase = {};
// Define the arrays (a.k.a. tables) in the database to store each type of items
libraryDatabase.customer = [];
libraryDatabase.books = [];

const loadDatabase = localStorageKey => {

    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}



