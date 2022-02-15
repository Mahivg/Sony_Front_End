import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/Product";
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'my-first',
  // template: `
  //   <h1> This is My First created component </h1>
  //   <p> Created manually by creating files </p>
  // `,
  // styles: [`
  //   h1 {
  //     color: #2647cE
  //   }
  // `]
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {
  title = 'MyFirstComponent';
  myNum: number = 10;

  toggleDiv: boolean = true;

  myObj = { a : 1 };

  myArr =  [1, 2, 3, 4, 5];

  // @Input()
  products: Product[] = [];

  @ViewChild('myNumInput')
  myNumberInput: ElementRef;

  constructor(private storageService: StorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.queryParams;
    console.log(routeParams);
    const firstParam = routeParams['ach'];
    console.log(firstParam);
    this.products = this.storageService.getProducts();
  }

  setCompTitle(newTitle: string) {
    this.title = newTitle;
    this.toggleDiv = (!this.toggleDiv);
  }

  updateMyNum() {
    console.dir(this.myNumberInput);
    this.myNum = +this.myNumberInput.nativeElement.value;
  }


  updateProductsWithStorage () {
    this.products = this.storageService.getProducts();
  }



}
