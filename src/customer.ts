// this is the way to export the class using common js
// const Transaction = require("./transaction.js");

// Import using module
import Transaction from "./transaction";
export default class Customer{
private name: string;
private id: number
private transactions: Transaction[]
    constructor (name: string, id: number) {
        this.transactions = [];
        this.name = name;
        this.id = id
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getTransaction() {
        return this.transactions;
    }

    // return the balance
    getBalance() {
        return this.transactions.reduce((total, transaction) => 
            total + transaction.getAmount(), 0)
    }

    // add transactions and return result of transaction as boolean
    // also add some validation so we can not go to a negative balance
    addTransaction(amount: number) {
        try {
            if (amount < 0 && this.getBalance() + amount < 0) {
                throw "You do not have enough balance"
            } else {
                const isSuccessful = this.transactions.push(new Transaction(amount));
                return isSuccessful > 0 ? true : false
            }
        } catch (error) {
            console.error(error);
        }
    }
}