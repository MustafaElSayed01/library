import { getCurrentDateTime } from './helpers.js ';

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

export default Transaction;