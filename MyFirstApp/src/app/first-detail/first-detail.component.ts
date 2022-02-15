import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'my-first-detail',
  templateUrl: './first-detail.component.html',
  styleUrls: ['./first-detail.component.css']
})
export class FirstDetailComponent implements OnInit {

  product: Product

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

//
  }

}
