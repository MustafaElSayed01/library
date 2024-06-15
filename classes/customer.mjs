import userClasses from './user.mjs';
const { User, UserManagement } = userClasses;
import { users } from '../database/data.mjs';

class Customer extends User {
    constructor(id, name, password) {
        super(id, name, password)
        this.role = 'Customer';
    }

    getRole() {
        return this.role;
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

class CustomerManagement {
    createCustomer(user, customerObj) {
        if (user.role !== 'Admin') {
            throw new Error('Only Admin can perform this action');
        } else {
            const dup = users.find((user) => user.id === customerObj.id);
            if (!dup) {
                const newCustomer = new Customer(customerObj.id, customerObj.name, customerObj.password)
                users.push(newCustomer);
            } else {
                throw new Error('Customer already exists');
            }
        }
    }
    retriveCustomer(id) {
        const customer = users.find((cus) => cus.id === id);
        if (customer && customer.role === 'Customer') {
            return customer;
        } else {
            throw new Error('Invalid ID');
        }
    }

}
export default { Customer, CustomerManagement }