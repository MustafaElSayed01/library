import { users } from '../database/data.mjs';
import Customer from './customer.mjs';

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

export default CustomerManagement;