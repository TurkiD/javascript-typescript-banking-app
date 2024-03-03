"use strict";
// this is the way to export the class using common js
// const Transaction = require("./transaction.js");
Object.defineProperty(exports, "__esModule", { value: true });
// Import using module
const transaction_1 = require("./transaction");
class Customer {
    constructor(name, id) {
        this.transactions = [];
        this.name = name;
        this.id = id;
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
        return this.transactions.reduce((total, transaction) => total + transaction.getAmount(), 0);
    }
    // add transactions and return result of transaction as boolean
    // also add some validation so we can not go to a negative balance
    addTransaction(amount) {
        try {
            if (amount < 0 && this.getBalance() + amount < 0) {
                throw "You do not have enough balance";
            }
            else {
                const isSuccessful = this.transactions.push(new transaction_1.default(amount));
                return isSuccessful > 0 ? true : false;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = Customer;
