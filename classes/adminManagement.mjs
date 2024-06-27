import { users } from "../database/data.mjs";

class AdminManagement{
    saveUser(user){
        users.push(user);
    }
}

export default AdminManagement;