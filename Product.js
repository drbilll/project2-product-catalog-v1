export class Product {
    constructor(name, price, currency) {
      this.name = name;
      this.price = price;
      this.currency = currency;
    }
  
    showProductName() {
      return this.name;
    }
  
    showPrice() {
      return `${this.price} ${this.currency}`;
    }
  }