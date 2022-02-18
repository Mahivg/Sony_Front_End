import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('txtUserName')
  inputUserName: ElementRef;

  @ViewChild('txtPassword')
  inputUserPass: ElementRef;

  firstComponentPath: string = 'first';

  @Output() onUserLogin = new EventEmitter<boolean>();

  constructor(private storageService: StorageService,
      private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.dir(this.activatedRoute);
  }

  login() {
    const username = this.inputUserName.nativeElement.value;
    const password = this.inputUserPass.nativeElement.value;
    const isLogin = this.storageService.validateUser(username, password);
    this.storageService.setUserLoggedInStatus(isLogin);


    console.log("LoginComponent --> login() --> Emits : " + isLogin);
    this.storageService.authStateChanged.next(isLogin);

    console.log('Is Valid Login : ' + isLogin);
    if(isLogin) {
      // this.onUserLogin.emit(true);
      // this.router.navigateByUrl('/first?abc=232&cdc=2121');

      this.router.navigate(['/first'], { queryParams: {
        ach: 23432,
        asdas: 3232
      }});
    }
  }

}
