var displayElement = document.querySelector("#display");
let displayAll = "";

import { Product } from "./Product.js";
import { Catalog } from "./Catalog.js";
import {Person} from "./Person.js";
import {Customers} from "./Customers.js";

const laptop = new Product('Book', 80, 'USD');
const smartphone = new Product('Bag', 60, 'Pound');

const catalog = new Catalog();
catalog.addProduct(laptop);
catalog.addProduct(smartphone);

const customer1 = new Person('Kane', 'More', 'kane@hello.com');
const customer2 = new Person('Hang', 'Tua', 'hang@hello.com');

const customersStore = new Customers();
customersStore.addCustomer(customer1);
customersStore.addCustomer(customer2);

for(let customer of customersStore.showAllCustomers()){
    // console.log(`Cutomer name: ${customer.getFullName()}, Email: ${customer.getEmail()}`);
    displayAll += `<br>Cutomer name: ${customer.getFullName()}, Email: ${customer.getEmail()}`;
}

for(let product of catalog.showCatalog()){
    // console.log(`Product name: ${product.showProductName()}, price: ${product.showPrice()}`);
    displayAll += `<br>Product name: ${product.showProductName()}, price: ${product.showPrice()}`
}

displayElement.innerHTML = displayAll;
