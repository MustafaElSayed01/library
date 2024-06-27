import Admin from './classes/admin.mjs';
import AdminManagement from './classes/adminManagement.mjs';
import LibrarianManagement from './classes/librarianManagement.mjs';
import CustomerManagement from './classes/customerManagement.mjs';
import TransactionManagement from './classes/transactionManagement.mjs';
import BookManagement from './classes/bookManagement.mjs';
import { users, books, transactions } from './database/data.mjs'
import { getCurrentDateTime } from './classes/helpers.js';


const admin = new Admin(0,"admin", "password");

const librarian_one = { id: 1, name: "Librarian 1", password: "Password", salary: 3500 }
// const librarian_two = { id: 2, name: "Librarian 2", password: "Password", salary: 5000 }
// const librarian_three = { id: 3, name: "Librarian 3", password: "Password", salary: 4000 }

const customer_one = { id: 4, name: "Customer 1", password: "Password" }
// const customer_two = { id: 5, name: "Customer 2", password: "Password" }
// const customer_three = { id: 6, name: "Customer 3", password: "Password" }

const adminManagement = new AdminManagement();
adminManagement.saveUser(admin);

const libMan = new LibrarianManagement();
libMan.createLibrarian(admin,librarian_one);
// libMan.editSalary(admin,1,5000);

const cusMang = new CustomerManagement();
cusMang.createCustomer(admin, customer_one);
// cusMang.createCustomer(admin, customer_two);

console.log(users)

const bookManage = new BookManagement();
const book_one = {
    id: 1,
    author: "Author",
    title: "Title",
    price: 35.10,
    quantity: 5,
    edition: 1
}
const book_two = {
    id: 2,
    author: "Author",
    title: "Title",
    price: 30,
    quantity: 2,
    edition: 1
}
const book_three = {
    id: 3,
    author: "Author",
    title: "Title",
    price: 15.87,
    quantity: 0,
    edition: 1
}
    bookManage.addBook(book_one);
    bookManage.addBook(book_two);
    bookManage.addBook(book_three);

const transaction = new TransactionManagement();
transaction.createCancellableTransaction(1, 4, [1, 2], [3, 3])
// transaction.createUnCancellableTransaction(1, 4, [1, 2], [3, 3])

// console.log(users)
// console.log(books)
console.log(transactions)

// const userMan = new UserManagement();
// userMan.getUsers()

