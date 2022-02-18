import { Injectable } from "@angular/core";
import { User } from "src/models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedIn: boolean = false;

  private users: User[] = [
    new User('u001', 'Mounika', 'mounika@gmail.com', 'Test@123'),
    new User('u002', 'Swapna', 'swapna@gmail.com', 'Test@123'),
    new User('u003', 'Swetha', 'swetha@gmail.com', 'Test@123'),
    new User('u004', 'Madhu', 'madhu@gmail.com', 'Test@123')
  ];

  constructor(){}

  getUserLoggedIn() : boolean {
    return this.userLoggedIn;
  }

  setUserLoggedIn(status: boolean) {
    this.userLoggedIn = status;
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

}
