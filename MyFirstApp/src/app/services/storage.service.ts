import { Injectable } from "@angular/core";
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(){}

  private products: Product[] = [
    new Product('1', 'Product 1', "Product 1 description", 1000),
    new Product('2', 'Product 2', "Product 2 description", 1000),
    new Product('3', 'Product 3', "Product 3 description", 1000),
    new Product('4', 'Product 4', "Product 4 description", 1000),
    new Product('5', 'Product 5', "Product 5 description", 1000),
    new Product('6', 'Product 6', "Product 6 description", 1000),
  ];

  getProducts() : Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
