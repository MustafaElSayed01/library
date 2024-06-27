import User from './user.mjs';

class Librarian extends User {
    constructor(id, name, password, salary) {
        super(id, name, password)
        this.role = 'Librarian';
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
    getRole() {
        return this.role;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}

export default Librarian;
