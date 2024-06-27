class DisplayTransaction {
    retriveTransaction(transaction) {
        for (let key in transaction) {
            if (transaction.hasOwnProperty(key)) {
                if (typeof transaction[key] === 'object' && transaction[key] !== null) {
                    console.log(`${indent}${key}:`);
                    printNestedObject(transaction[key], indent + '  ');
                } else {
                    console.log(`${indent}${key}: ${transaction[key]}`);
                }
            }
        }
    }
}

export default DisplayTransaction;