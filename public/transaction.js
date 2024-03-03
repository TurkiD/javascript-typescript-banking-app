"use strict";
// this is the way to export the class using common js
// module.exports = class Transaction{ 
Object.defineProperty(exports, "__esModule", { value: true });
// Import using module
class Transaction {
    constructor(amount) {
        this.amount = amount;
        this.date = new Date();
    }
    getAmount() {
        return this.amount;
    }
}
exports.default = Transaction;
