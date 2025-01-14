import Customer from "./customer.js";
export default class Branch {
  private name: string;
  private customers: Customer[];
  constructor(name: string) {
    this.customers = [];
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  findCustomer(customerName: string): Customer[]{
    customerName = customerName.toLowerCase().trim();
    const targetCustomer = this.customers.filter((customer) =>
    customer.getName().toLowerCase().includes(customerName)
    );
    return targetCustomer;
  }

  addCustomer(customer: Customer): boolean {
    try {
      if (!this.customers.includes(customer)) {
        const result = this.customers.push(customer);
        return result > 0 ? true : false;
      }
      throw "Could not add a customer";
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  addCustomerTransaction(customerId: number, amount: number): boolean {
    try {
      const targetCustomer = this.customers.find(
        (customer) => customer.getId() === customerId
      );
      if (targetCustomer) {
        return targetCustomer.addTransaction(amount);
      } else {
        throw "Customer not exist";
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
