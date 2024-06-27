import { users, books, transactions } from '../database/data.mjs'
import BookManagement from './bookManagement.mjs';
import CancellableReservation from './cancellableReservation.mjs';
import UnCancellableReservation from './unCancellableReservation.mjs';
import DisplayTransaction from './displayTransaction.mjs';
import { getCurrentDate, addDaysToDate } from './helpers.js';

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

export default TransactionManagement;