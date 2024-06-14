import userClasses from './user.js';
const { User, UserManagement } = userClasses;
import { users, books } from '../database/data.js'

class Librarian extends User {
    constructor(id, name, password, salary) {
        super(name, password)
        this.id = id;
        this.role = 'Librarian';
        this.salary = salary;
    }

    #getName() {
        return this.name;
    }
    #getPassword() {
        return this.password;
    }
    #getSalary() {
        return this.salary;
    }
    #getRole() {
        return this.role;
    }

    #setName(name) {
        this.name = name;
    }
    #setPassword(password) {
        this.password = password;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    #setRole(role) {
        this.role = role;
    }
}

class LibrarianManagement{
    // retriveLibrarian(id) {
    //     const librarian = users.find((lib) => lib.id === id);
    //     if (librarian && librarian.role === 'Librarian') {
    //         return librarian;
    //     } else {
    //     }
    // }
}

export default { Librarian, LibrarianManagement };
