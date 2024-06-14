import userClasses from './classes/user.mjs';
const { User, UserManagement } = userClasses;
import adminClasses from './classes/admin.mjs';
const { Admin, AdminManagement, AdminDisplay } = adminClasses;
import librarianClasses from './classes/librarian.mjs';
const { Librarian, LibrarianManagement } = librarianClasses;
import transactionClasses from './classes/transaction.mjs';
const { Transaction, TransactionManagement, DisplayTransaction } = transactionClasses;
import bookClasses from './classes/book.mjs';
const { Book, BookManagement, DisplayBook } = bookClasses;
import { users, books, transactions } from './database/data.mjs'
import {getCurrentDateTime} from './classes/helpers.js';
import Customer from './classes/customer.mjs';

// const admin = new Admin("name","password");
// // const librarian = admin.createLibrarian(3,"Librarian 3","Password", 40000);
// // admin.editSalary(librarian, 5000)
// // console.log(librarian);
// // const customer = admin.createCustomer("5","Customer 5","Password");
// // const adminMan = new AdminManagement();
// // adminMan.insertUser(librarian)
// // console.log(adminMan.retriveUser(customer))


// const tran = new TransactionManagement();
// // tran.createTransaction(1,3,[2,3],[3,1]);
// // tran.createTransaction(1,3,[1,3],[3,1]);

// // console.log(transactions)
// // const customer = new Customer(3,"Customer","password")




const admin = new Admin("admin","password");
const librarian_one = admin.createLibrarian(1,"Librarian 1","Password",3500);
const librarian_two = admin.createLibrarian(2,"Librarian 2","Password",3000);
const librarian_three = admin.createLibrarian(3,"Librarian 3","Password",3800);
const customer_one = admin.createCustomer(4,"Customer 1","Password");
const customer_two = admin.createCustomer(5,"Customer 2","Password");
const customer_three = admin.createCustomer(6,"Customer 3","Password");
const adminManage = new AdminManagement();
const userObjects = [librarian_one,librarian_two,librarian_three,customer_one,customer_two,customer_three]
adminManage.insertUser(userObjects);

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
try {
    bookManage.addBook(book_one);
    bookManage.addBook(book_two);
    bookManage.addBook(book_three);
} catch (error) {
    console.error(error.message);
}
const transaction = new TransactionManagement();
transaction.createTransaction(1,4,[1,2],[3,3])
console.log(users)
console.log(books)
console.log(transactions)