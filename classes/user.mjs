class User {
    constructor(id,name, password) {
        if (this.constructor === User) {
            throw new Error("Cannot instantiate abstract class User");
        }
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


export default User;