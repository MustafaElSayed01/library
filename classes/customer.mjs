import User from './user.mjs';

class Customer extends User {
    constructor(id, name, password) {
        super(id, name, password)
        this.role = 'Customer';
    }

    getRole() {
        return this.role;
    }
}


export default Customer;