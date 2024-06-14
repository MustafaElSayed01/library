import { users } from "../database/data.js";

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
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
}

class UserManagement {

}
export default { User, UserManagement };