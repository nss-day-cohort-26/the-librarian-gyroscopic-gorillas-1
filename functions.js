const checkoutBookFunction = (title, custName) => {
    let lib = libraryDatabase.books;
    console.log(lib);
    for (const key in lib) {
        // console.log(lib[key].checkedOut);
        // let asd=key
        if (key==title && lib[key].checkedOut===false) {
            console.log("hi");
            console.log(key);
            console.log(lib[key]);
            console.log(libraryDatabase.customer);
            
            
            // libraryDatabase.customer.forEach(element => {
            //     if (element == custName) {
            //         element.bookShelf += key;
            //         console.log(Jim);
                    
            //     }
            // });
            
            
        }
    }
    
}