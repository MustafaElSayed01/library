import { users } from "../database/data.mjs";

class User {
    constructor(id,name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    setName(name) {
        this.name = name;
    }
    setPassword(password) {
        this.password = password;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
}

class UserManagement {
    getUsers() {
        users.forEach((user) => {
            console.log("ID: " + user.id)
            console.log("Name: " + user.name)
            console.log("Role: " + user.role)
            if (user.hasOwnProperty('salary')) {
                console.log("Salary: " + user.salary)
            }
        });
    }
    createUser(user){}
    retriveUser(id){}
}
export default { User, UserManagement };