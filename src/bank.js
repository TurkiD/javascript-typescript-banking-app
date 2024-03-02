import  Branch  from "./branch.js";
import Customer from "./customer.js";
class Bank {
#name;
#branches
    constructor(name) {
        this.#branches = [];
        this.#name = name;
    } 

    addBranch(branch) {
        try {  
            if (!this.#branches.includes(branch)) {
                const result = this.#branches.push(branch);
                result > 0 ? true : false
                return result;
                } 
                throw "Branch Already Exist"
            } catch (error) {
                console.log(error);
        }
    }

    findBranchByName(branchName) {
        const targetBranch = this.#branches.find((branch) => branch.getName() === branchName);
        return targetBranch.getName();
    }

    checkBranch(branch) {
        return this.#branches.includes(branch)
    }

    addCustomer(branch, customer) {
        if (this.#branches.includes(branch)) {
            const result = branch.addCustomer(customer);
            return result > 0 ? true : false;
        }
    }

    addCustomerTransaction(branch, customerId, amount) {
        try {
            const targetBranch = this.findBranchByName(branch);
            if (targetBranch === undefined) {
                throw "Branch dose not exist"
            } else {
                return targetBranch.addCustomerTransaction(customerId, amount);
            }
        } catch (error) {
            return false;
        }
    }

    listCustomers(branch, includeTransactions) {
        if (includeTransactions) {
            const targetBranch = this.findBranchByName(branch);
            if (targetBranch) {
                console.log(`${targetBranch.name} : ${targetBranch.amount}`);
            }
        } else {
            console.log("no customers");
        }
    }
}

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

// console.log(westBranch.getName());

// // arizonaBank.findBranchByName(sunBranch);
// arizonaBank.findBranchByName("westBranch");
// arizonaBank.findBranchByName("Sun Branch");

// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")

// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)

console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000));
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

// customer1.addTransaction(-1000);
// console.log(customer1.getBalance())
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))