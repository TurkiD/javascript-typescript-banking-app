"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Branch {
    constructor(name) {
        this.customers = [];
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        try {
            if (!this.customers.includes(customer)) {
                const result = this.customers.push(customer);
                return result > 0 ? true : false;
            }
            throw "Could not add a customer";
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    addCustomerTransaction(customerId, amount) {
        try {
            const targetCustomer = this.customers.find((customer) => customer.getId() === customerId);
            if (targetCustomer) {
                return targetCustomer.addTransaction(amount);
            }
            else {
                throw "Customer not exist";
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.default = Branch;
