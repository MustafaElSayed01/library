import bookClasses from './book.mjs';
const { Book, BookManagement } = bookClasses;
import { users, books, transactions } from '../database/data.mjs';
import { getCurrentDate, getCurrentDateTime, addDaysToDate } from './helpers.js ';

class Transaction {
    constructor(librarian, customer, issuedBooks, startDate, days, endDate) {
        if (this.constructor === Transaction) {
            throw new Error("Cannot instantiate abstract class Transaction");
        }

        this.orderID = getCurrentDateTime();
        this.librarian = librarian;
        this.customer = customer;
        this.issuedBooks = issuedBooks;
        this.days = days;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = "ongoing";
        this.price = this.calculatePrice();
    }
    getOrderID() {
        return this.orderID;
    }

    setOrderID(orderID) {
        this.orderID = orderID;
    }

    getLibrarian() {
        return this.librarian;
    }

    setLibrarian(librarian) {
        this.librarian = librarian;
    }

    getCustomer() {
        return this.customer;
    }

    setCustomer(customer) {
        this.customer = customer;
    }

    getIssuedBooks() {
        return this.issuedBooks;
    }

    setIssuedBooks(issuedBooks) {
        this.issuedBooks = issuedBooks;
    }

    getDays() {
        return this.days;
    }

    setDays(days) {
        this.days = days;
    }

    getStartDate() {
        return this.startDate;
    }

    setStartDate(startDate) {
        this.startDate = startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    setEndDate(endDate) {
        this.endDate = endDate;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    calculatePrice() {
        throw new Error("Abstract method calculatePrice must be implemented by subclass");
    }
}

class CancellableReservation extends Transaction{
    calculatePrice(){
        const cancellationFees = 0.10
        let total = 0;
        for (let i = 0; i < this.issuedBooks.length; i++) {
            total += this.issuedBooks[i].price * 0.10 * this.days[i] + ( cancellationFees * this.issuedBooks[i].price );
        }
        return parseFloat(total.toFixed(2));
    }
}

class UnCancellableReservation extends Transaction{
    calculatePrice(){
        let total = 0;
        for (let i = 0; i < this.issuedBooks.length; i++) {
            total += this.issuedBooks[i].price * 0.10 * this.days[i];
        }
        return parseFloat(total.toFixed(2));
    }
}

class TransactionManagement {
    createCancellableTransaction(librarianId, customerId, bookId, days) {
        const librarian = users.find((librarian) => librarian.id === librarianId);
        const customer = users.find((customer) => customer.id === customerId);
        const selectedBooks = books.filter((book) => bookId.includes(book.id));
        const date = getCurrentDate();
        const dueDate = days.map(day => addDaysToDate(date, day));
        const transaction = new CancellableReservation(librarian, customer, selectedBooks, date, days, dueDate);
        transactions.push(transaction);
        const bookManagement = new BookManagement();
        bookManagement.takeBooks(selectedBooks);
    }
    createUnCancellableTransaction(librarianId, customerId, bookId, days) {
        const librarian = users.find((librarian) => librarian.id === librarianId);
        const customer = users.find((customer) => customer.id === customerId);
        const selectedBooks = books.filter((book) => bookId.includes(book.id));
        const date = getCurrentDate();
        const dueDate = days.map(day => addDaysToDate(date, day));
        const transaction = new UnCancellableReservation(librarian, customer, selectedBooks, date, days, dueDate);
        transactions.push(transaction);
        const bookManagement = new BookManagement();
        bookManagement.takeBooks(selectedBooks);
    }
    retriveTransaction(transactionId) {
        const transaction = transactions.find((transaction) => transaction.orderID === transactionId);
        const displayTransaction = new DisplayTransaction();
        return displayTransaction.retriveTransaction(transaction);
    }
    deleteTransaction(transactionId) {
        const index = transactions.findIndex((transaction) => transaction.orderID === transactionId);
        if (index !== -1) {
            transactions.splice(index, 1);
        }
    }
}

class DisplayTransaction {
    retriveTransaction(transaction) {
        for (let key in transaction) {
            if (transaction.hasOwnProperty(key)) {
                if (typeof transaction[key] === 'object' && transaction[key] !== null) {
                    console.log(`${indent}${key}:`);
                    printNestedObject(transaction[key], indent + '  ');
                } else {
                    console.log(`${indent}${key}: ${transaction[key]}`);
                }
            }
        }
    }

}

export default { Transaction, TransactionManagement, DisplayTransaction };


// returnable / unreturnable