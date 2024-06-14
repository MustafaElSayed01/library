import { books } from '../database/data.mjs'

class Book {
    constructor({ id, author, title, price, quantity, edition }) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.edition = edition;
        this.isAvailable = quantity > 0;
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

    issueBook() {
        if (this.quantity > 0) {
            this.quantity -= 1;
            this.isAvailable = this.quantity > 0;
        } else {
            throw new Error(`Book with ID ${this.id} is out of stock`);
        }
    }

    returnBook() {
        this.quantity += 1;
        this.isAvailable = true;
    }

    // subtractQuantity() {
    //     if (this.isAvailable) {
    //         this.quantity = this.quantity - 1;
    //         if (this.quantity === 0) {
    //             this.isAvailable = false;
    //         }
    //     } else {
    //         const displayBook = new DisplayBook();
    //         displayBook.checkAvailability(this);
    //     }
    //     return this;
    // }
}

class BookManagement {
    takeBooks(issuedBooks) {
        issuedBooks.forEach((iBook) => {
            const existingBook = books.find((book) => book.id === iBook.id);
            if (existingBook) {
                existingBook.issueBook();
            } else {
                throw new Error(`Book with ID ${iBook.id} not found in inventory`);
            }
        });
    }
    returnBooks(returnedBooks) {
        returnedBooks.forEach((rBook) => {
            const existingBook = books.find((book) => book.id === rBook.id);
            if (existingBook) {
                existingBook.returnBook();
            } else {
                throw new Error(`Book with ID ${rBook.id} not found in inventory`);
            }
        });
    }
    // takeBook(issuedBooks) {
    //     issuedBooks.forEach(iBook => {
    //         const bookie = books.find((book) => book.id === iBook.id)
    //         const book = new Book(bookie);
    //         book.subtractQuantity();
    //         const bookIndex = books.findIndex((obj) => obj.id === book.id);
    //         books.splice(bookIndex, 1, book);
    //     });
    // }
    showBook(bookId) {
        const book = books.find((book) => book.id === bookId);
        const displayBook = new DisplayBook();
        return displayBook.displayBookDetails(book)
    }
    showBooks(){
        return books
    }
    addBook(bookData) {
        if (books.find((b) => b.id === bookData.id)) {
            throw new Error(`Book with ID ${bookData.id} already exists`);
        }

        const newBook = new Book(bookData);
        books.push(newBook);
        return newBook;
    }
}

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
export default { Book, BookManagement, DisplayBook };