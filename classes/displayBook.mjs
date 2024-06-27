class DisplayBook {
    checkAvailability(book) {
        console.log("The Book with ID: " + book.id + " is unavailable and cannot be issued at the moment! ")
    }
    displayBookDetails(book) {
        for (let key in book) {
            console.log(`${key}: ${book[key]}`);
        }
    }
}

export default DisplayBook;