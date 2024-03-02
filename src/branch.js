import Customer from "./customer.js";
export default class Branch {
    #name;
    #customers
    constructor(name) {
        this.#customers = [];
        this.#name = name;
    } 

    getName() {
        return this.#name;
    }

    getCustomers() {
        return this.#customers
    }

    addCustomer(customer) {
        try {  
        if (!this.#customers.includes(customer)) {
            const result = this.#customers.push(customer);
            return result > 0 ? true : false
            } 
            throw "Could not add a customer"
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    addCustomerTransaction (customerId, amount) {
        // console.log(this.#customers[0].getName());
        // const targetCustomer = this.#customers.find(
        //     (customer) => customer.name === customerId);
        //     console.log(`${targetCustomer.name}`);     
        // if (targetCustomer) {
        //     targetCustomer.addTransaction(amount)
        //     return true;
        // } else {
        //      return false;
        //     }
        }   
    }