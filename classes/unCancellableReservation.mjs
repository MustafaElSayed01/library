import Transaction from "./transaction.mjs";

class UnCancellableReservation extends Transaction{
    calculatePrice(){
        let total = 0;
        for (let i = 0; i < this.issuedBooks.length; i++) {
            total += this.issuedBooks[i].price * 0.10 * this.days[i];
        }
        return parseFloat(total.toFixed(2));
    }
}

export default UnCancellableReservation;