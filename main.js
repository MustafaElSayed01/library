import Librarian from './classes/librarian.js';
import transactionClasses from './classes/transaction.js';
const { Transaction, TransactionManagement, DisplayTransaction } = transactionClasses;
import bookClasses from './classes/book.js';
const { Book, BookManagement, DisplayBook } = bookClasses;
import { users, books, transactions } from './database/data.js'
import {getCurrentDateTime} from './classes/helpers.js';

const tran = new TransactionManagement();

const book = new BookManagement();
book.showBook(1)    