import { users } from "../database/data.mjs";

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
}

export default UserManagement;