import { books } from "../database/data.mjs";
import Book from "./book.mjs";
import DisplayBook from "./displayBook.mjs";

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

export default BookManagement;