import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyFirstApp';
  currentTab: string = 'login';
  toggleSecondComponent : boolean = true;
  showFirst: boolean = true;
  showSecond: boolean = false;
  appProducts:Product[] = [];


  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.appProducts = this.storageService.getProducts();
  }

  changeTab(firstComp: boolean, secondComp: boolean) {
    this.showFirst = firstComp;
    this.showSecond = secondComp;
  }

  receiveProductFromChild (product:Product) {
    if(product) {
      this.appProducts.push(product);
    }
  }

  onTabChangeReceived(tabName: string) {
    this.currentTab = tabName;
  }

  onLogin(isValidUser: boolean) {
    this.currentTab = isValidUser ? 'first' : 'login';
  }
}
