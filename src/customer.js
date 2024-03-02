// this is the way to export the class using common js
// const Transaction = require("./transaction.js");

// Import using module
import Transaction from "./transaction.js";
export default class Customer{
#name
#id
#transactions
    constructor (name, id) {
        this.#transactions = [];
        this.#name = name;
        this.#id = id
    }

    getName() {
        return this.#name;
    }

    getId() {
        return this.#id;
    }
    
    getTransaction() {
        return this.#transactions;
    }

    // return the balance
    getBalance() {
        return this.#transactions.reduce((total, transaction) => 
            total + transaction.amount, 0)
    }

    // add transactions and return result of transaction as boolean
    // also add some validation so we can not go to a negative balance
    addTransaction(amount) {
        let isSuccessful;
        try {
            if (amount < 0 && this.getBalance() + amount < 0) {
                throw "You do not have enough balance"
            } else {
                isSuccessful = this.#transactions.push(new Transaction(amount));
            }
        } catch (error) {
            console.error(error);
        }
        return isSuccessful > 0 ? true : false
    }
}

// export default addTransaction;
// const c1 = new Customer('turki', 101);
// console.log(c1.getName());
// c1.addTransaction(1000);
// c1.addTransaction(2000);
// console.log(c1.getTransaction());
// console.log(c1.addTransaction(-3000));
// console.log(c1.getBalance());
