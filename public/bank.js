"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const branch_js_1 = require("./branch.js");
const customer_js_1 = require("./customer.js");
console.log("++++++++++++++++++++++++++++++++++++Bank System+++++++++++++++++++++++++++++++++++++");
class Bank {
    constructor(name) {
        this.branches = [];
        this.name = name;
    }
    addBranch(branch) {
        try {
            if (!this.checkBranch(branch)) {
                const result = this.branches.push(branch);
                if (result > 0 ? true : false) {
                    console.log(`${branch.getName()} Added`);
                    return true;
                }
            }
            throw `${branch.getName()} Already Exist\n`;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    findBranchByName(branchName) {
        branchName = branchName.toLowerCase().trim();
        const targetBranch = this.branches.filter((branch) => branch.getName().toLowerCase().includes(branchName));
        return targetBranch;
    }
    checkBranch(branch) {
        return this.branches.includes(branch);
    }
    addCustomer(branch, customer) {
        try {
            if (this.checkBranch(branch)) {
                const result = branch.addCustomer(customer);
                return result;
            }
            throw `Something went wrong while adding a customer ${customer.getName()}
                    to the branch ${branch.getName()}`;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    addCustomerTransaction(branch, customerId, amount) {
        try {
            if (this.checkBranch(branch)) {
                if (branch.addCustomerTransaction(customerId, amount)) {
                    return "Transaction Was Successful";
                }
                else {
                    return `Transaction Failed, You do not have an account in ${branch.getName()}`;
                }
            }
            else {
                throw "Transactions can not be done duo to unavailabilities of the Branch";
            }
        }
        catch (error) {
            return error;
        }
    }
    listCustomers(branch, includeTransactions) {
        try {
            if (includeTransactions) {
                // const customers = targetBranch[0].getCustomers();
                if (this.checkBranch(branch)) {
                    const customers = branch.getCustomers();
                    // Display
                    console.log("Branch:- " + branch.getName() + ":\n");
                    customers.forEach((customer) => {
                        if (customer.getTransaction().length > 0) {
                            console.log("Customer Name: " + customer.getName() + ", Customer ID: " + customer.getId());
                            console.log(customer.getTransaction());
                        }
                        else {
                            -console.log("Customer Name: " + customer.getName() + ", Customer ID: " + customer.getId());
                            console.log("No Data ara Available");
                        }
                    });
                    console.log("-------------------------------------------------------------------");
                }
            }
            else {
                throw "no customers";
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
const arizonaBank = new Bank("Arizona");
const westBranch = new branch_js_1.default("West Branch");
const sunBranch = new branch_js_1.default("Sun Branch");
const customer1 = new customer_js_1.default("John", 1);
const customer2 = new customer_js_1.default("Anna", 2);
const customer3 = new customer_js_1.default("John", 3);
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
console.log("-------------------------------------------------------------------");
console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000));
console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000));
console.log(arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000));
console.log("-------------------------------------------------------------------");
customer1.addTransaction(-1000);
console.log("\nThe Balance for customer: " + customer1.getName() + ", is: " + customer1.getBalance() + " SAR\n");
console.log("-------------------------------------------------------------------");
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, true);
