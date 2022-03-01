import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../models/Product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MySecondComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  myStr: string = '';

  // @Output()
  // onProductUpdated = new EventEmitter<Product>();

  newProduct: Product = new Product('7', 'Product 7', 'Product 7 Description', 2000,'23/02/1011');

  constructor(private storageService: StorageService) {
    // Dependency Injection
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges : ' + changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit : ');
    this.myStr = 'MyStr1';
  }


  pushNewProductToParent() {
    this.newProduct.id = Math.random().toString();
    this.storageService.addProduct(this.newProduct);
    // this.onProductUpdated.emit(this.newProduct);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck : ');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit : ');

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked : ');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit : ');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked : ');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy : ');
  }
}
