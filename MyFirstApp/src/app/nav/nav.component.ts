import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  @Output('tabChange')
  onTabChange = new EventEmitter<string>();

  isUserLoggedIn: boolean = false;

  sub: Subscription;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
   this.sub =  this.storageService.authStateChanged$.subscribe(status => {
      console.log("NavComponent --> ngOnInit() --> Received : " + status);
      this.isUserLoggedIn = status;
      // if(!this.isUserLoggedIn)
        // this.router.navigate(['/login']);
    });
  }

  changeTab(tabName: string) {
    this.onTabChange.emit(tabName);
  }

  logout() {
    console.log("NavComponent --> logout() --> Produces : " + false);
    this.storageService.authStateChanged.next(false);
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }


}
