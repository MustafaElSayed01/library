import userClasses from './user.js';
const { User, UserManagement } = userClasses;
import { users } from '../database/data.js'
import librarianClasses from './librarian.js';
const { Librarian, LibrarianManagement } = librarianClasses;
import Customer from './customer.js';

class Admin extends User {
    constructor(name, password) {
        super(name, password)
    }
    #setName(name) {
        this.name = name;
    }
    #setPassword(password) {
        this.password = password;
    }
    #getName() {
        return this.name;
    }
    #getPassword() {
        return this.password;
    }

    createLibrarian(id, name, password, salary) {
        return new Librarian(id, name, password, salary);
    }
    editSalary(librarian,newSalary) {
        librarian.setSalary(newSalary)
    }
    createCustomer(id, name, password) {
        return new Customer(id, name, password);
        
    }
}

class AdminManagement{
    // retriveLibrarian(id) {
    //     const librarian = users.find((lib) => lib.id === id);
    //     if (librarian && librarian.role === 'Librarian') {
    //         return librarian;
    //     } else {
    //     }
    // }
    // saveLibrarian(librarian) {
    //     const librarianIndex = users.findIndex((obj) => obj.id === librarian.id);
    //     users.splice(librarianIndex, 1, librarian);
    // }

    insertUser(user) {
        users.push(user);
    }
    retriveUser(userd){
        return users.find((user) => user.id === userd.id )
    }
}

class AdminDisplay {
    // logMessage(message) {
    //     console.log(message)
    // }
}
export default { Admin, AdminManagement, AdminDisplay }



