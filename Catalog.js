export class Catalog {
    constructor() {
      this.productStore = [];
    }
  
    addProduct(product) {
      this.productStore.push(product);
    }

    showCatalog(){
        return this.productStore;
    }
  }