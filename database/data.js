const users = [
    {
        id: 1,
        name: "Librarian 1",
        password:"Password",
        role: "Librarian",
        salary: 3000
    },
    {
        id: 2,
        name: "Librarian 2",
        password:"Password",
        role: "Librarian",
        salary: 2500
    },

    {
        id: 4,
        name: "Customer 2",
        password:"Password",
        role: "Customer",
        issuedBooks: 0,
        totalPaid:0
    }
];

const books = [
    {
        id: 1,
        author: "Author 1",
        title: "Book Title 1",
        price: 15.47,
        quantity: 5,
        edition: 3,
        isAvailable: true
    },
    {
        id: 2,
        author: "Author 2",
        title: "Book Title 2",
        price: 28.63,
        quantity: 1,
        edition: 4,
        isAvailable: true
    },
    {
        id: 3,
        author: "Author 3",
        title: "Book Title 3",
        price: 9.82,
        quantity: 7,
        edition: 2,
        isAvailable: true
    },
    {
        id: 4,
        author: "Author 4",
        title: "Book Title 4",
        price: 37.19,
        quantity: 3,
        edition: 1,
        isAvailable: true
    },
    {
        id: 5,
        author: "Author 5",
        title: "Book Title 5",
        price: 30.69,
        quantity: 3,
        edition: 3,
        isAvailable: true
    }
];

const transactions = [];

export { users, books, transactions };