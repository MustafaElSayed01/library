// import { users, books } from '../database/data.js'

class Librarian {
    // Private constructor
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

}

export default Librarian;
