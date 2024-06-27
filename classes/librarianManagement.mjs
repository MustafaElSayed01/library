import { users } from '../database/data.mjs';
import Librarian from './librarian.mjs';

class LibrarianManagement {
    createLibrarian(user, libObj) {
        if (user.role !== 'Admin') {
            throw new Error('Only Admin can perform this action');
        } else {
            const dup = users.find((user) => user.id === libObj.id);
            if (!dup) {
                const newLibrarian = new Librarian(libObj.id, libObj.name, libObj.password, libObj.salary)
                users.push(newLibrarian);
            } else {
                throw new Error('Customer already exists');
            }
        }
    }

    retriveLibrarian(id) {
        const librarian = users.find((lib) => lib.id === id);
        if (librarian && librarian.role === 'Librarian') {
            return librarian;
        } else {
            throw new Error('Invalid ID');
        }
    }

    editSalary(user, libraryId, salary) {
        if (user.role !== 'Admin') {
            throw new Error('Only Admin can perform this action');
        } else {
            const librarian = this.retriveLibrarian(libraryId);
            librarian.setSalary(salary);
        }
    }
}

export default LibrarianManagement;