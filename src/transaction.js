// this is the way to export the class using common js
// module.exports = class Transaction{ 

// Import using module
export default class Transaction{
#amount;
#date
    constructor (amount) {
        this.amount = amount;
        this.date = new Date();
    }
}

