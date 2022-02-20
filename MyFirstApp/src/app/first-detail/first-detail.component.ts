import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, observable, Observable, Subscription } from 'rxjs';
import { Product } from '../models/Product';
import { StorageService } from '../services/storage.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-first-detail',
  templateUrl: './first-detail.component.html',
  styleUrls: ['./first-detail.component.css']
})
export class FirstDetailComponent implements OnInit, OnDestroy {

  product: Product;

  subscription1: Subscription;

  constructor(private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    // const routePathParams = this.route.snapshot.params;
    // console.log(routePathParams);
    // const prodId = routePathParams.id;
    // this.product = this.storageService.getProductById(prodId);
            // Observable<Params>  Params
    //         // reactive or dynamic
    this.route.params.subscribe(routePathParams => {
      console.log(routePathParams);
      const prodId = routePathParams.id;
      this.product = this.storageService.getProductById(prodId);
      // whenever route params getting changed
    });
    const data = [1,2,3,4,5,6,7,8,9,10];

    const observer = new Observable<number[]>(observable => {
      observable.next(data);
    });

    observer.subscribe(data => {
      console.log(data);
    });

    this.subscription1 = interval(1000).subscribe(data => {
      // console.log(data);
    });
    // this.myInterval(1000).subscribe(data => {
    //   console.log(data);
    // });
//
  }

  myInterval(mill: number) {
    let i = -1;
    return new Observable(observable => {
        setTimeout(()=> {
            observable.next(++i);
        }, mill);
    });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

}
