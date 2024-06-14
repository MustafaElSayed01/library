import bookClasses from './book.mjs';
const { Book, BookManagement } = bookClasses;
import { users, books, transactions } from '../database/data.mjs';
import { getCurrentDate, getCurrentDateTime, addDaysToDate } from './helpers.js ';

class Transaction {
    constructor(librarian, customer, issuedBooks, startDate, days, endDate) {
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

    getissuedBooks() {
        return this.issuedBooks;
    }

    setissuedBooks(issuedBooks) {
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
        let total = 0;
        for (let i = 0; i < this.issuedBooks.length; i++) {
            total += this.issuedBooks[i].price * 0.10 * this.days[i];
        }
        return parseFloat(total.toFixed(2));
    }
}

class TransactionManagement {
    createTransaction(librarianId, customerId, bookId, days) {
        const librarian = users.find((librarian) => librarian.id === librarianId);
        const customer = users.find((customer) => customer.id === customerId);
        const selectedBooks = books.filter((book) => bookId.includes(book.id));
        const date = getCurrentDate();
        const dueDate = days.map(day => addDaysToDate(date, day));
        const transaction = new Transaction(librarian, customer, selectedBooks, date, days, dueDate);
        transactions.push(transaction);
        const bookManagement = new BookManagement();
        bookManagement.takeBooks(selectedBooks);
    }
    retriveTransaction(transactionId) {
        const transaction =  transactions.find((transaction) => transaction.orderID === transactionId);
        const displayTransaction = new DisplayTransaction()
        return displayTransaction.retriveTransaction(transaction);
    }
    deleteTransaction(transactionId) {
        const index = transactions.findIndex((transaction) => transaction.orderID === transactionId);
        if (index !== -1) {
            transactions.splice(index, 1);
        }
    }
}

class DisplayTransaction{
    retriveTransaction(transaction){
            function printNestedObject(obj, indent = '') {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (typeof obj[key] === 'object' && obj[key] !== null) {
                            console.log(`${indent}${key}:`);
                            printNestedObject(obj[key], indent + '  ');
                        } else {
                            console.log(`${indent}${key}: ${obj[key]}`);
                        }
                    }
                }
            }
            printNestedObject(transaction)
    }
}

export default { Transaction, TransactionManagement, DisplayTransaction };