export class Customers {
    constructor() {
      this.customersStore = [];
    }
  
    addCustomer(person) {
      this.customersStore.push(person);
    }
  
    showAllCustomers() {
      return this.customersStore;//.map(customer => customer.getFullName());
    }
  }