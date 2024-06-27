import Transaction from "./transaction.mjs";

class CancellableReservation extends Transaction{
    calculatePrice(){
        const cancellationFees = 0.10
        let total = 0;
        for (let i = 0; i < this.issuedBooks.length; i++) {
            total += this.issuedBooks[i].price * 0.10 * this.days[i] + ( cancellationFees * this.issuedBooks[i].price );
        }
        return parseFloat(total.toFixed(2));
    }
}

export default CancellableReservation;