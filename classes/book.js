import { books } from '../database/data.js'

class Book {
    constructor({ id, author, title, price, quantity, edition }) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.edition = edition;
        this.isAvailable = this.setAvailability();
    }
    // Getters
    getBookId() {
        return this.id;
    }

    getAuthor() {
        return this.author;
    }

    getTitle() {
        return this.title;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    getEdition() {
        return this.edition;
    }
    getAvailability() {
        return this.isAvailable;
    }

    // Setters
    setBookId(bookId) {
        this.bookId = bookId;
    }

    setAuthor(author) {
        this.author = author;
    }

    setTitle(title) {
        this.title = title;
    }

    setPrice(price) {
        this.price = price;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    setEdition(edition) {
        this.edition = edition;
    }

    setAvailability() {
        return this.quantity > 0;
    }

    subtractQuantity() {
        if (this.isAvailable) {
            this.quantity = this.quantity - 1;
            if (this.quantity === 0) {
                this.isAvailable = false;
            }
        } else {
            const displayBook = new DisplayBook();
            displayBook.checkAvailability(this);
        }
        return this;
    }
}

class BookManagement {
    takeBook(issuedBooks) {
        issuedBooks.forEach(iBook => {
            const bookie = books.find((book) => book.id === iBook.id)
            const book = new Book(bookie);
            book.subtractQuantity();
            const bookIndex = books.findIndex((obj) => obj.id === book.id);
            books.splice(bookIndex, 1, book);
        });
    }
    showBook(bookId){
        const book =  books.find((book) => book.id === bookId);
        const displayBook = new DisplayBook()
        return displayBook.displayBookDetails(book);
    
    }
}

class DisplayBook{
    checkAvailability(book){
        console.log("The Book with ID: " + book.id +" is unavailable and cannot be issued at the moment! ")
    }
    displayBookDetails(book) {
        for (let key in book) {
            console.log(`${key}: ${book[key]}`);
        }
    }
}
export default { Book, BookManagement, DisplayBook };