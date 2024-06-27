import User from './user.mjs';

class Admin extends User {
    constructor(id, name, password) {
        super(id, name, password)
        this.role = 'Admin';
    }

    getRole() {
        return this.role;
    }
}

export default Admin;



