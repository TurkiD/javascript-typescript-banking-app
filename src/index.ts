import  Branch  from "./branch.js";
import Customer from "./customer.js";
import  Bank  from "./bank.js";
import Transaction from "./transaction.js";

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")


arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

console.log("-------------------------------------------------------------------");

console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000));
console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000));
console.log(arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000));

console.log("-------------------------------------------------------------------");

customer1.addTransaction(-1000);
console.log("\nThe Balance for customer: " + customer1.getName() + ", is: " + customer1.getBalance() + " SAR\n");
console.log("-------------------------------------------------------------------");
arizonaBank.listCustomers(westBranch, true)
arizonaBank.listCustomers(sunBranch, true)