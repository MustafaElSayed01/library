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
    
}

export default Book;