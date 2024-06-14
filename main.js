import userClasses from './classes/user.js';
const { User, UserManagement } = userClasses;
import adminClasses from './classes/admin.js';
const { Admin, AdminManagement, AdminDisplay } = adminClasses;
import librarianClasses from './classes/librarian.js';
const { Librarian, LibrarianManagement } = librarianClasses;
import transactionClasses from './classes/transaction.js';
const { Transaction, TransactionManagement, DisplayTransaction } = transactionClasses;
import bookClasses from './classes/book.js';
const { Book, BookManagement, DisplayBook } = bookClasses;
import { users, books, transactions } from './database/data.js'
import {getCurrentDateTime} from './classes/helpers.js';
import Customer from './classes/customer.js';

const admin = new Admin("name","password");
// const librarian = admin.createLibrarian(3,"Librarian 3","Password", 40000);
// admin.editSalary(librarian, 5000)
// console.log(librarian);
// const customer = admin.createCustomer("5","Customer 5","Password");
// const adminMan = new AdminManagement();
// adminMan.insertUser(librarian)
// console.log(adminMan.retriveUser(customer))


const tran = new TransactionManagement();
// tran.createTransaction(1,3,[2,3],[3,1]);
// tran.createTransaction(1,3,[1,3],[3,1]);

// console.log(transactions)
// const customer = new Customer(3,"Customer","password")

const book = new BookManagement();


const booksie = [];


console.log(users)