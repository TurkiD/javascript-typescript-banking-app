import  Branch  from "./branch.js";
import Customer from "./customer.js";
console.log("++++++++++++++++++++++++++++++++++++Bank System+++++++++++++++++++++++++++++++++++++");
export default class Bank {
private name: string;
private branches: Branch[];
    constructor(name: string) {
        this.branches = [];
        this.name = name;
    } 

    addBranch(branch: Branch): boolean {
        try {  
            if (!this.checkBranch(branch)) {
                const result = this.branches.push(branch);
                if (result > 0 ? true : false) {
                    console.log(`${branch.getName()} Added`);
                    return true;
                }
                } 
                throw `${branch.getName()} Already Exist\n`
            } catch (error) {
                console.log(error);
                return false
        }
    }

    findBranchByName(branchName: string): Branch[] | null{
        branchName = branchName.toLowerCase().trim();
        const targetBranch = this.branches.filter((branch) => branch.getName().toLowerCase().includes(branchName));
        return targetBranch;
    }

    checkBranch(branch: Branch): boolean {
        return this.branches.includes(branch)
    }

    addCustomer(branch: Branch, customer: Customer): boolean{
        try {
            if (this.checkBranch(branch)) {
                const result = branch.addCustomer(customer);
                return result
            }
            throw `Something went wrong while adding a customer ${customer.getName()}
                    to the branch ${branch.getName()}`
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    addCustomerTransaction(branch: Branch, customerId: number, amount: number): boolean {
        try {
            if (this.checkBranch(branch)) {
                if (branch.addCustomerTransaction(customerId, amount)) {
                    console.log("Transaction Was Successful");
                    
                    return true
                } else {
                    console.log(`Transaction Failed, You do not have an account in ${branch.getName()}`);
                    return false
                }
            } else {
                throw "Transactions can not be done duo to unavailabilities of the Branch"
            }
        } catch (error) {
            console.log(error);
            
            return false;
        }
    }

    listCustomers(branch: Branch, includeTransactions: boolean): void{
        try {
            if (includeTransactions) {
                // const customers = targetBranch[0].getCustomers();
                if (this.checkBranch(branch)) {
                    const customers = branch.getCustomers()
                    
                    // Display
                    console.log("Branch:- " + branch.getName() +  ":\n");
                    customers.forEach((customer) => {
                        if (customer.getTransaction().length > 0) {
                            console.log("Customer Name: " + customer.getName() + ", Customer ID: " + customer.getId());
                            console.log(customer.getTransaction());
                        } else {-
                            console.log("Customer Name: " + customer.getName() + ", Customer ID: " + customer.getId());
                            console.log("No Data ara Available");
                        }
                    });
                        console.log("-------------------------------------------------------------------");
                }
            } else {
                throw "no customers"
            }
        } catch (error) {
            console.log(error);
        }
    }
}
