const checkoutBookFunction = (title, custName) => {
    let lib = libraryDatabase.books;
    // console.log(lib);
    for (const key in lib) {
        // console.log(lib[key].checkedOut);
        // let asd=key
        if (key==title && lib[key].checkedOut===false) {
            // console.log("hi");
            // console.log(key);
            // console.log(lib[key]);
            console.log(libraryDatabase.customers["Halpert, Jim"].bookshelf);
            
            
            libraryDatabase.customers[custName].bookshelf[key] = lib[key]
            lib[key].checkedOut = true
            console.log(lib[key]);
            
            console.log(libraryDatabase.customers[custName].bookshelf);
            break;
            
        }else if (lib[key].checkedOut===true) {
            console.log("error book is checked out");
            break;
        }else{break;}
    }
    
}