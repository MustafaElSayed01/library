import userClasses from './user.mjs';
const { User, UserManagement } = userClasses;
import { transactions } from "../database/data.mjs";

class Customer extends User {
    constructor(id, name, password) {
        super(name, password)
        this.id = id;
        this.role = 'Customer';
        // this.issuedBooks = 0;
        // this.totalPaid = 0;
    }

    #getName() {
        return this.name;
    }
    #getPassword() {
        return this.password;
    }
    #getRole() {
        return this.role;
    }
    #getIssuedBooks() {
        return this.issuedBooks;
    }
    #getTotalPaid() {
        return this.totalPaid;
    }

    #setName(name) {
        this.name = name;
    }
    #setPassword(password) {
        this.password = password;
    }
    #setRole(role) {
        this.role = role;
    }
    #setIssuedBooks(issuedBooks) {
        this.issuedBooks = issuedBooks;
    }
    #setTotalPaid(totalPaid) {
        this.totalPaid = totalPaid;
    }

    // calculcateIssuedBooks() {
    //     const books = [];
    //     const customerTransactions = transactions.filter((transaction) => transaction.customer.id === this.id);
    //     customerTransactions.forEach((customer) => {
    //         books.push(customer.issuedBooks)
    //     });
    //     return books;
    // }
    // calculateTotalPaid(id) {
    //     const customerTransactions = transactions.filter((customer) => customer.customer.id === id);
    //     customerTransactions.forEach((transaction) => {
    //         this.totalPaid += transaction.price;
    //     });
    //     return this.totalPaid;
    // }
}
export default Customer