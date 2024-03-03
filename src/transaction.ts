// this is the way to export the class using common js
// module.exports = class Transaction{ 

// Import using module
export default class Transaction{
private amount: number;
private date: Date;
    constructor (amount: number) {
        this.amount = amount;
        this.date = new Date();
    }
    
    getAmount(): number{
        return this.amount;
    }
}

