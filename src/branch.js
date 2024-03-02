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
            result > 0 ? true : false
            return result;
            } 
            throw "Customer Already Exist"
        } catch (error) {
            console.log(error);
        }
        return result;
    }

    addCustomerTransaction (customerId, amount) {
        const customer = this.#customers.find(
            (customer) => customer.id === customerId);     
        if (customer) {
            customer.addTransaction(amount)
            return true;
        } else {
             return false;
            }
        }   
    }

// export default addCustomerTransaction;