import userClasses from './user.mjs';
const { User, UserManagement } = userClasses;
import { users } from '../database/data.mjs'
import librarianClasses from './librarian.mjs';
const { Librarian, LibrarianManagement } = librarianClasses;
import Customer from './customer.mjs';


class Admin extends User {
    constructor(id, name, password) {
        super(id, name, password)
        this.role = 'Admin';
    }

    getRole() {
        return this.role;
    }

    // createLibrarian(id, name, password, salary) {
    //     return new Librarian(id, name, password, salary);
    // }

    // createCustomer(id, name, password) {
    //     return new Customer(id, name, password);
    // }
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
    saveUser(user){
        users.push(user);
    }
}

class AdminDisplay {

}
export default { Admin, AdminManagement, AdminDisplay }



