import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/Product";
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private isUserLoggedIn: boolean = false;

  authStateChanged = new BehaviorSubject<boolean>(false); // Singleton variable
  authStateChanged$ = this.authStateChanged.asObservable(); // singleton variable

  constructor(){}

  private products: Product[] = [
    new Product('1', 'Product 1', "Product 1 description", 1000, '2/13/1990'),
    new Product('2', 'Product 2', "Product 2 description", 2000, '2/14/1990'),
    new Product('3', 'Product 3', "Product 3 description", 7000, '2/2/1990'),
    new Product('4', 'Product 4', "Product 4 description", 4000, '2/11/1990'),
    new Product('5', 'Product 5', "Product 5 description", 2500, '2/11/1990'),
    new Product('6', 'Product 6', "Product 6 description", 1500, '2/1/1990'),
  ];

  private users: User[] = [
    new User('u001', 'Mounika', 'mounika@gmail.com', 'Test@123'),
    new User('u002', 'Swapna', 'swapna@gmail.com', 'Test@123'),
    new User('u003', 'Swetha', 'swetha@gmail.com', 'Test@123'),
    new User('u004', 'Madhu', 'madhu@gmail.com', 'Test@123')
  ];


  getProducts() : Product[] {
    return this.products;
  }
  getProductById(id: string) : Product {
    return this.products.find(p => p.id == id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getUsers(): User[] {
    return [...this.users];
  }

  validateUser(username: string, password: string): boolean {
    const user = this.users.find( u => (u.name.toLowerCase() == username.toLowerCase() || u.email.toLowerCase() == username.toLowerCase()));
    if(user) {
      return user.password.toLowerCase() == password.toLowerCase();
    }
    return false;
  }

  getUserLoggedInStatus() : boolean {
    return this.isUserLoggedIn;
  }

  setUserLoggedInStatus(isValid: boolean) {
    this.isUserLoggedIn = isValid;
  }



}
